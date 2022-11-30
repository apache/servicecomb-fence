/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.servicecomb.fence.authentication;

import org.apache.commons.lang3.StringUtils;
import org.apache.servicecomb.fence.token.AbstractOpenIDTokenStore;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.provider.pojo.RpcReference;
import org.apache.servicecomb.provider.springmvc.reference.RestTemplateBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriUtils;

import com.netflix.config.DynamicPropertyFactory;

@Component
public class GithubTokenGranter implements ThirdPartyTokenGranter {
  private static final Logger LOGGER = LoggerFactory.getLogger(GithubTokenGranter.class);

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_USER_DETAILS_SERVICE)
  private UserDetailsService userDetailsService;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private AbstractOpenIDTokenStore openIDTokenStore;

  @RpcReference(microserviceName = "githubAuthService", schemaId = "githubAuthService")
  GithubOAuthService githubOAuthService;

  RestTemplate githubRestTemplate = RestTemplateBuilder.create();

  @Override
  public boolean enabled() {
    return DynamicPropertyFactory.getInstance()
        .getBooleanProperty(AuthenticationServerConstants.CONFIG_GRANTER_THIRD_GITHUB_ENABLED, true)
        .get();
  }

  @Override
  public String name() {
    return AuthenticationServerConstants.GRANT_TYPE_THIRD_PARTY_GITHUB;
  }

  @Override
  public OpenIDToken grant(String code, String state, String login) {
    GithubAccessTokenResponse response = null;
    try {
      HttpHeaders headers = new HttpHeaders();
      headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
      headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
      MultiValueMap<String, String> map = new LinkedMultiValueMap<>();
      map.add("client_secret", GithubDynamicPropertiesManager.getGithubConfiguration().getClientSecret());
      map.add("client_id", GithubDynamicPropertiesManager.getGithubConfiguration().getClientId());
      map.add("code", code);
      map.add("state", state);
      HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(map, headers);
      response = githubRestTemplate.postForObject("cse://githubAuthService/login/oauth/access_token",
          request,
          GithubAccessTokenResponse.class);
    } catch (Exception e) {
      LOGGER.error("Call github error. ", e);
    }

    if (response == null || StringUtils.isEmpty(response.getAccess_token())) {
      return null;
    }

    if (StringUtils.isEmpty(login)) {
      login = "anonymous";
    }
    try {
      UserDetails userDetails = userDetailsService.loadUserByUsername(name() + ":" + login);

      OpenIDToken openIDToken = openIDTokenStore.createToken(userDetails);
      openIDToken.addAdditionalInformation(AuthenticationServerConstants.TOKEN_ADDTIONAL_INFORMATION_GITHUB_TOKEN,
          response);

      openIDTokenStore.saveToken(openIDToken);
      return openIDToken;
    } catch (UsernameNotFoundException e) {
      return null;
    }
  }

  @Override
  public String providerInfo(String provider, String redirectURI, String login, String scope, String initialState) {
    StringBuilder url = new StringBuilder();
    url.append(GithubDynamicPropertiesManager.getGithubConfiguration().getOauthAuthorizeURL() + "?");
    url.append("client_id=" + GithubDynamicPropertiesManager.getGithubConfiguration().getClientId() + "&");

    if (login != null) {
      url.append("login=" + UriUtils.encode(login, "utf-8") + "&");
      redirectURI = redirectURI + "&login=" + login;
    }
    if (scope != null) {
      url.append("scope=" + UriUtils.encode(scope, "utf-8") + "&");
    }
    url.append("redirect_uri=" + UriUtils.encode(redirectURI, "utf-8") + "&");

    url.append("state=" + initialState);
    return url.toString();
  }
}

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

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.servicecomb.fence.token.AbstractOpenIDTokenStore;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.token.Token;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import com.netflix.config.DynamicPropertyFactory;

@Component
public class RefreshTokenTokenGranter implements TokenGranter {
  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_USER_DETAILS_SERVICE)
  private UserDetailsService userDetailsService;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private AbstractOpenIDTokenStore openIDTokenStore;

  @Override
  public boolean enabled() {
    return DynamicPropertyFactory.getInstance()
        .getBooleanProperty(AuthenticationServerConstants.CONFIG_GRANTER_REFRESH_TOKEN_ENABLED, true)
        .get();
  }

  @Override
  public String grantType() {
    return AuthenticationServerConstants.GRANT_TYPE_REFRESH_TOKEN;
  }

  @Override
  public OpenIDToken grant(Map<String, String> parameters) {
    String refreshTokenValue = parameters.get(AuthenticationServerConstants.PARAM_REFRESH_TOKEN);

    if (StringUtils.isEmpty(refreshTokenValue)) {
      return null;
    }

    Token refreshToken = openIDTokenStore.readTokenByRefreshToken(refreshTokenValue);

    if (refreshToken != null && !refreshToken.isExpired()) {
      UserDetails userDetails = userDetailsService.loadUserByUsername(refreshToken.getUsername());
      OpenIDToken openIDToken = openIDTokenStore.createToken(userDetails);
      openIDTokenStore.saveToken(openIDToken);
      return openIDToken;
    }
    return null;
  }

}

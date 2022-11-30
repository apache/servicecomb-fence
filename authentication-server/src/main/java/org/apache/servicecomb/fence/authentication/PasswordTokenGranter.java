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
import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.netflix.config.DynamicPropertyFactory;

@Component
public class PasswordTokenGranter implements TokenGranter {
  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_USER_DETAILS_SERVICE)
  private UserDetailsService userDetailsService;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_PASSWORD_ENCODER)
  private PasswordEncoder passwordEncoder;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private AbstractOpenIDTokenStore openIDTokenStore;

  @Override
  public OpenIDToken grant(Map<String, String> parameters) {
    String username = parameters.get(AuthenticationServerConstants.PARAM_USERNAME);
    String password = parameters.get(AuthenticationServerConstants.PARAM_PASSWORD);

    if (StringUtils.isEmpty(username) || StringUtils.isEmpty(password)) {
      return null;
    }

    try {
      UserDetails userDetails = userDetailsService.loadUserByUsername(username);
      if (passwordEncoder.matches(password, userDetails.getPassword())) {
        OpenIDToken openIDToken = openIDTokenStore.createToken(userDetails);
        openIDTokenStore.saveToken(openIDToken);
        return openIDToken;
      } else {
        return null;
      }
    } catch (UsernameNotFoundException e) {
      return null;
    }
  }

  @Override
  public String grantType() {
    return AuthenticationServerConstants.GRANT_TYPE_PASSWORD;
  }

  @Override
  public boolean enabled() {
    return DynamicPropertyFactory.getInstance()
        .getBooleanProperty(AuthenticationServerConstants.CONFIG_GRANTER_PASSWORD_ENABLED, true)
        .get();
  }

}

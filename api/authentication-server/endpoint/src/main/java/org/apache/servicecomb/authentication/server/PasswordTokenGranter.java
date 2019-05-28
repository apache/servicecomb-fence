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

package org.apache.servicecomb.authentication.server;

import java.util.Map;

import org.apache.servicecomb.authentication.token.TokenStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.netflix.config.DynamicPropertyFactory;

@Component(value = "passwordTokenGranter")
public class PasswordTokenGranter implements TokenGranter {
  @Autowired
  @Qualifier("authUserDetailsService")
  private UserDetailsService userDetailsService;

  @Autowired
  @Qualifier("authPasswordEncoder")
  private PasswordEncoder passwordEncoder;

  @Autowired
  @Qualifier("authAccessTokenStore")
  private TokenStore accessTokenStore;

  @Autowired
  @Qualifier("authRefreshTokenStore")
  private TokenStore refreshTokenStore;

  @Autowired
  @Qualifier("authIDTokenStore")
  private TokenStore idTokenStore;

  @Override
  public TokenResponse grant(Map<String, String> parameters) {
    String username = parameters.get(TokenConst.PARAM_USERNAME);
    String password = parameters.get(TokenConst.PARAM_PASSWORD);

    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
    if (passwordEncoder.matches(password, userDetails.getPassword())) {
      TokenResponse token = new TokenResponse();
      token.setAccess_token(accessTokenStore.createToken(userDetails).getValue());
      token.setRefresh_token(refreshTokenStore.createToken(userDetails).getValue());
      token.setId_token(idTokenStore.createToken(userDetails).getValue());

      //TODO add parameters.
      token.setScope(null);
      token.setExpires_in(10 * 60);
      token.setToken_type("bearer");

      return token;
    } else {
      return null;
    }
  }

  @Override
  public String grantType() {
    return TokenConst.GRANT_TYPE_PASSWORD;
  }

  @Override
  public boolean enabled() {
    return DynamicPropertyFactory.getInstance()
        .getBooleanProperty("servicecomb.authentication.granter.password.enabled", true)
        .get();
  }

}

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

import org.apache.servicecomb.authentication.token.Token;
import org.apache.servicecomb.authentication.token.TokenStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import com.netflix.config.DynamicPropertyFactory;

@Component(value = "fefreshTokenTokenGranter")
public class RefreshTokenTokenGranter implements TokenGranter {
  @Autowired
  @Qualifier("authUserDetailsService")
  private UserDetailsService userDetailsService;

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
  public boolean enabled() {
    return DynamicPropertyFactory.getInstance()
        .getBooleanProperty("servicecomb.authentication.granter.refreshToken.enabled", true)
        .get();
  }

  @Override
  public String grantType() {
    return TokenConst.GRANT_TYPE_REFRESH_TOKEN;
  }

  @Override
  public TokenResponse grant(Map<String, String> parameters) {
    String refreshTokenValue = parameters.get(TokenConst.PARAM_REFRESH_TOKEN);

    Token refreshToken = refreshTokenStore.readTokenByValue(refreshTokenValue);

    if (refreshToken != null && !refreshToken.isExpired()) {
      UserDetails userDetails = userDetailsService.loadUserByUsername(refreshToken.username());

      TokenResponse token = new TokenResponse();
      token.setAccess_token(accessTokenStore.createToken(userDetails).getValue());
      // refresh token is not generated 
      token.setRefresh_token(refreshTokenValue);
      token.setId_token(idTokenStore.createToken(userDetails).getValue());

      //TODO add parameters.
      token.setScope(null);
      token.setExpires_in(10 * 60);
      token.setToken_type("bearer");
      return token;
    }
    return null;
  }

}

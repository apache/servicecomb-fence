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

import org.apache.servicecomb.authentication.token.AbstractOpenIDTokenStore;
import org.apache.servicecomb.authentication.token.OpenIDToken;
import org.apache.servicecomb.authentication.token.Token;
import org.apache.servicecomb.authentication.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import com.netflix.config.DynamicPropertyFactory;

@Component
public class RefreshTokenTokenGranter implements TokenGranter {
  @Autowired
  @Qualifier(Constants.BEAN_AUTH_USER_DETAILS_SERVICE)
  private UserDetailsService userDetailsService;

  @Autowired
  @Qualifier(Constants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private AbstractOpenIDTokenStore openIDTokenStore;

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

    Token refreshToken = openIDTokenStore.readTokenByRefreshTokenValue(refreshTokenValue);

    if (refreshToken != null && !refreshToken.isExpired()) {
      UserDetails userDetails = userDetailsService.loadUserByUsername(refreshToken.username());
      OpenIDToken openIDToken = openIDTokenStore.createToken(userDetails);
      return TokenResponse.fromOpenIDToken(openIDToken);
    }
    return null;
  }

}

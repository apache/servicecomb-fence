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

import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.fence.jwt.JsonParser;
import org.apache.servicecomb.fence.token.AbstractOpenIDTokenStore;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.authentication.user.TokenMapper;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
public class JDBCOpenIDTokenStore extends AbstractOpenIDTokenStore {
  @Autowired
  private TokenMapper tokenMapper;

  @Override
  public CompletableFuture<OpenIDToken> readTokenByAccessToken(String value) {
    CompletableFuture<OpenIDToken> result = new CompletableFuture<>();

    String tokenInfo = tokenMapper.getTokenInfoByAccessTokenId(value);
    if (tokenInfo != null) {
      result.complete(JsonParser.parse(tokenInfo, OpenIDToken.class));
    }
    result.complete(null);
    return result;
  }

  @Override
  public OpenIDToken readTokenByRefreshToken(String refreshTokenValue) {
    String tokenInfo = tokenMapper.getTokenInfoByRefreshTokenId(refreshTokenValue);
    if (tokenInfo != null) {
      return JsonParser.parse(tokenInfo, OpenIDToken.class);
    }
    return null;
  }

  @Override
  public void saveToken(OpenIDToken token) {
    tokenMapper.insertNewToken(token.getValue(),
        token.getRefreshToken().getValue(),
        JsonParser.unparse(token));
  }

}

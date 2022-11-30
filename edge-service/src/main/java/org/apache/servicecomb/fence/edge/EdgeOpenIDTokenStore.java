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

package org.apache.servicecomb.fence.edge;

import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.fence.token.AbstractOpenIDTokenStore;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.provider.pojo.RpcReference;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
public class EdgeOpenIDTokenStore extends AbstractOpenIDTokenStore {
  @RpcReference(microserviceName = "authentication-server", schemaId = "TokenEndpoint")
  private AuthenticationServerTokenEndpoint tokenEndpoint;

  @Override
  public OpenIDToken createToken(UserDetails userDetails) {
    throw new UnsupportedOperationException();
  }

  @Override
  public CompletableFuture<OpenIDToken> readTokenByAccessToken(String accessToken) {
    return tokenEndpoint.queryToken(accessToken);
  }

  @Override
  public OpenIDToken readTokenByRefreshToken(String refreshToken) {
    throw new UnsupportedOperationException();
  }

  @Override
  public void saveToken(OpenIDToken token) {
    throw new UnsupportedOperationException();
  }

}

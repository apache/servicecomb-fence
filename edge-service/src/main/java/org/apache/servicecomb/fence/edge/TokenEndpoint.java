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

import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.provider.pojo.RpcReference;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestSchema(schemaId = "TokenEndpoint")
@RequestMapping(path = "/v1/token")
public class TokenEndpoint implements TokenService {
  @RpcReference(microserviceName = "authentication-server", schemaId = "TokenEndpoint")
  private AuthenticationServerTokenEndpoint authenticationSererTokenEndpoint;

  @Override
  @PostMapping(path = "/", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
  public CompletableFuture<TokenResponse> getToken(@RequestBody Map<String, String> parameters) {
    CompletableFuture<TokenResponse> result = new CompletableFuture<>();

    CompletableFuture<OpenIDToken> response =
        authenticationSererTokenEndpoint.grantToken(parameters);
    response.whenComplete((tokenResonse, ex) -> {
      if (!response.isCompletedExceptionally()) {
        result.complete(TokenResponse.fromOpenIDToken(tokenResonse));
      } else {
        result.completeExceptionally(ex);
      }
    });
    return result;
  }
}

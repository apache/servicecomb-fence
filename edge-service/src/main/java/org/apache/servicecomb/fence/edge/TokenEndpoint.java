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

import org.apache.servicecomb.fence.api.edge.TokenResponse;
import org.apache.servicecomb.fence.api.edge.TokenService;
import org.apache.servicecomb.fence.edge.dependencies.AsyncTokenService;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.apache.servicecomb.swagger.invocation.exception.CommonExceptionData;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.ws.rs.core.Response.Status;

@RestSchema(schemaId = "TokenEndpoint", schemaInterface = TokenService.class)
public class TokenEndpoint implements TokenService {
  private AsyncTokenService asyncTokenService;

  @Autowired
  public void setAsyncTokenService(AsyncTokenService asyncTokenService) {
    this.asyncTokenService = asyncTokenService;
  }

  @Override
  public CompletableFuture<TokenResponse> getToken(Map<String, String> parameters) {
    CompletableFuture<TokenResponse> result = new CompletableFuture<>();

    CompletableFuture<OpenIDToken> response =
        asyncTokenService.grantToken(parameters);
    response.whenComplete((tokenResonse, ex) -> {
      if (!response.isCompletedExceptionally()) {
        if (tokenResonse == null) {
          result.completeExceptionally(new InvocationException(Status.FORBIDDEN,
              new CommonExceptionData("Invalid credentials")));
          return;
        }
        result.complete(TokenResponse.fromOpenIDToken(tokenResonse));
      } else {
        result.completeExceptionally(ex);
      }
    });
    return result;
  }
}

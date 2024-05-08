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

import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.core.filter.AbstractFilter;
import org.apache.servicecomb.core.filter.EdgeFilter;
import org.apache.servicecomb.core.filter.FilterNode;
import org.apache.servicecomb.fence.token.JWTToken;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.token.OpenIDTokenStore;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.foundation.common.utils.BeanUtils;
import org.apache.servicecomb.swagger.invocation.Response;
import org.apache.servicecomb.swagger.invocation.exception.CommonExceptionData;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;

import jakarta.ws.rs.core.Response.Status;

public class AuthHandler extends AbstractFilter implements EdgeFilter {
  @Override
  public int getOrder() {
    return super.getOrder();
  }

  @Override
  public String getName() {
    return super.getName();
  }

  @Override
  public CompletableFuture<Response> onFilter(Invocation invocation, FilterNode nextNode) {
    String token = invocation.getContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION);
    String tokenType = invocation.getContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION_TYPE);
    if (token == null) {
      return CompletableFuture.failedFuture(new InvocationException(Status.FORBIDDEN,
          new CommonExceptionData("not authenticated")));
    }

    OpenIDTokenStore openIDTokenStore = BeanUtils.getBean(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE);

    if (CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN.equals(tokenType)) {
      JWTToken jwtToken = openIDTokenStore.createIDTokenByValue(token);
      if (jwtToken == null || jwtToken.isExpired()) {
        return CompletableFuture.failedFuture(new InvocationException(Status.FORBIDDEN,
            new CommonExceptionData("token expired or not valid")));
      }

      // send id_token to services to apply state less validation
      invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION, jwtToken.getValue());
      return nextNode.onFilter(invocation);
    } else if (CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN.equals(tokenType)) {
      CompletableFuture<OpenIDToken> openIDTokenFuture = openIDTokenStore.readTokenByAccessToken(token);
      CompletableFuture<Void> result = new CompletableFuture<>();
      openIDTokenFuture.whenComplete((res, ex) -> {
        if (openIDTokenFuture.isCompletedExceptionally() || res == null || res.isExpired()) {
          result.completeExceptionally(new InvocationException(Status.FORBIDDEN,
              new CommonExceptionData("not authenticated")));
          return;
        }

        // send id_token to services to apply state less validation
        invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION, res.getIdToken().getValue());
        result.complete(null);
      });
      return result.thenCompose((v) -> nextNode.onFilter(invocation));
    } else {
      return CompletableFuture.failedFuture(new InvocationException(Status.FORBIDDEN,
          new CommonExceptionData("not authenticated")));
    }
  }
}

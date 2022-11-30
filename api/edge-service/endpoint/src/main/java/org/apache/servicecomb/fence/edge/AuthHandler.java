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

import org.apache.servicecomb.fence.token.JWTToken;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.token.OpenIDTokenStore;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.core.Handler;
import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.foundation.common.utils.BeanUtils;
import org.apache.servicecomb.swagger.invocation.AsyncResponse;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;

public class AuthHandler implements Handler {
  @Override
  public void handle(Invocation invocation, AsyncResponse asyncResponse) throws Exception {
    String token = invocation.getContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION);
    String tokenType = invocation.getContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION_TYPE);
    if (token == null) {
      asyncResponse.consumerFail(new InvocationException(403, "forbidden", "not authenticated"));
      return;
    }

    OpenIDTokenStore openIDTokenStore = BeanUtils.getBean(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE);

    if (CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN.equals(tokenType)) {
      JWTToken jwtToken = openIDTokenStore.createIDTokenByValue(token);
      if (jwtToken == null || jwtToken.isExpired()) {
        asyncResponse.consumerFail(new InvocationException(403, "forbidden", "token expired or not valid."));
        return;
      }

      // send id_token to services to apply state less validation
      invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION, jwtToken.getValue());
      invocation.next(asyncResponse);
    } else if (CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN.equals(tokenType)) {
      CompletableFuture<OpenIDToken> openIDTokenFuture = openIDTokenStore.readTokenByAccessToken(token);
      openIDTokenFuture.whenComplete((res, ex) -> {
        if (openIDTokenFuture.isCompletedExceptionally() || res == null || res.isExpired()) {
          asyncResponse.consumerFail(new InvocationException(403, "forbidden", "not authenticated"));
          return;
        }

        // send id_token to services to apply state less validation
        invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION, res.getIdToken().getValue());
        try {
          invocation.next(asyncResponse);
        } catch (Exception e) {
          asyncResponse.consumerFail(new InvocationException(403, "forbidden", "not authenticated"));
          return;
        }
      });
    } else {
      asyncResponse.consumerFail(new InvocationException(403, "forbidden", "not authenticated"));
      return;
    }
  }
}

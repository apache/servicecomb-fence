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

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response.Status;

import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.token.OpenIDTokenStore;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestSchema(schemaId = "TokenEndpoint")
@RequestMapping(path = "/v1/token")
public class TokenEndpoint implements TokenService {
  @Autowired
  private List<TokenGranter> granters;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private OpenIDTokenStore store;

  @Override
  @PostMapping(path = "/", consumes = MediaType.APPLICATION_FORM_URLENCODED)
  public OpenIDToken grantToken(@RequestBody Map<String, String> parameters) {
    String grantType = parameters.get(AuthenticationServerConstants.PARAM_GRANT_TYPE);

    for (TokenGranter granter : granters) {
      if (granter.enabled()) {
        OpenIDToken token = granter.grant(grantType, parameters);
        if (token != null) {
          return token;
        }
      }
    }

    return null;
  }

  @Override
  @PostMapping(path = "/query")
  public OpenIDToken queryToken(@RequestParam("access_token") String accessToken) {
    CompletableFuture<OpenIDToken> result = store.readTokenByAccessToken(accessToken);
    try {
      return result.get();
    } catch (Exception e) {
      throw new InvocationException(Status.INTERNAL_SERVER_ERROR, "internal unexpected error.");
    }
  }

}

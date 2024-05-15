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

package org.apache.servicecomb.fence.tests;

import java.util.HashMap;
import java.util.Map;

import org.apache.servicecomb.fence.api.edge.TokenResponse;
import org.apache.servicecomb.fence.api.edge.TokenService;
import org.apache.servicecomb.fence.tests.EndpointConfiguration.HandlerAuthService;
import org.apache.servicecomb.fence.tests.EndpointConfiguration.PreMethodAuthService;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

@Component
public class TokenExpireTestCase implements TestCase {
  @Autowired
  private HandlerAuthService handlerAuthService;

  @Autowired
  private PreMethodAuthService preMethodAuthService;

  @Autowired
  private TokenService tokenService;

  @Override
  public void run() throws Exception {
    // This test case will wait expiration for 3 seconds per run. Do not give too much tests.
    TokenResponse token = getTokenByPassword();
    testHanlderAuth(token.getAccess_token(), null);
    // expired. create new for next test. 
    token = getTokenByPassword();
    testHanlderAuth(token.getId_token(), CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN);
    // expired. create new for next test. 
    token = getTokenByPassword();
    testHanlderAuth(token.getAccess_token(), CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN);
  }

  private TokenResponse getTokenByPassword() throws Exception {
    // get token
    Map<String, String> map = new HashMap<>();
    map.put("grant_type", "password");
    map.put("username", "guestExpiresQuickly");
    map.put("password", "changeMyPassword");

    TokenResponse token = tokenService.getToken(map).get();
    TestMgr.check(CommonConstants.TOKEN_TYPE_BEARER, token.getToken_type());
    TestMgr.check(3, token.getExpires_in());
    TestMgr.check(true, token.getId_token().length() > 10);
    return token;
  }

  private void testHanlderAuth(String token, String type) {
    // get resources
    HttpHeaders headers = new HttpHeaders();
    headers = new HttpHeaders();
    headers.add("Authorization", "Bearer " + token);
    if (type != null) {
      headers.add("Authorization-Type", type);
    }
    headers.setContentType(MediaType.APPLICATION_JSON);
    String name;
    name = handlerAuthService.everyoneSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = handlerAuthService.guestOrAdminSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = handlerAuthService.guestSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    // user guestExpiresQuickly token expires in 3 seconds
    try {
      Thread.sleep(3000);
      name = handlerAuthService.guestSayHello("Hi", "Bearer " + token, type);
      TestMgr.check("must fail", "not fail");
    } catch (InvocationException e) {
      TestMgr.check(403, e.getStatusCode());
    } catch (Exception e2) {
      TestMgr.failed("", e2);
    }
  }
}

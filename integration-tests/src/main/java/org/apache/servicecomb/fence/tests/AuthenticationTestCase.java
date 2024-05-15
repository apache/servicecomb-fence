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
import org.springframework.stereotype.Component;

@Component
public class AuthenticationTestCase implements TestCase {
  @Autowired
  private HandlerAuthService handlerAuthService;

  @Autowired
  private PreMethodAuthService preMethodAuthService;

  @Autowired
  private TokenService tokenService;

  @Override
  public void run() throws Exception {
    TokenResponse token = getTokenByPassword();
    testHanlderAuth(token.getAccess_token(), null);
    testHanlderAuth(token.getId_token(), CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN);
    testHanlderAuth(token.getAccess_token(), CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN);
    testMethodAuth(token.getAccess_token(), null);
    testMethodAuth(token.getId_token(), CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN);
    testMethodAuth(token.getAccess_token(), CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN);

    token = getTokenByRefreshToken();
    testHanlderAuth(token.getAccess_token(), null);
    testHanlderAuth(token.getId_token(), CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN);
    testHanlderAuth(token.getAccess_token(), CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN);
    testMethodAuth(token.getAccess_token(), null);
    testMethodAuth(token.getId_token(), CommonConstants.AUTHORIZATION_TYPE_ID_TOKEN);
    testMethodAuth(token.getAccess_token(), CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN);
  }

  private TokenResponse getTokenByPassword() throws Exception {
    // get token
    Map<String, String> map = new HashMap<>();
    map.put("grant_type", "password");
    map.put("username", "admin");
    map.put("password", "changeMyPassword");

    TokenResponse token = tokenService.getToken(map).get();
    TestMgr.check(CommonConstants.TOKEN_TYPE_BEARER, token.getToken_type());
    TestMgr.check(true, token.getId_token().length() > 10);
    TestMgr.check(600, token.getExpires_in());
    return token;
  }

  private TokenResponse getTokenByRefreshToken() throws Exception {
    // get token
    Map<String, String> map = new HashMap<>();
    map.put("grant_type", "password");
    map.put("username", "admin");
    map.put("password", "changeMyPassword");

    TokenResponse token = tokenService.getToken(map).get();
    TestMgr.check(CommonConstants.TOKEN_TYPE_BEARER, token.getToken_type());
    TestMgr.check(true, token.getAccess_token().length() > 10);

    // refresh token
    map = map = new HashMap<>();
    map.put("grant_type", "refresh_token");
    map.put("refresh_token", token.getRefresh_token());

    TokenResponse tokenNew = tokenService.getToken(map).get();
    TestMgr.check(token.getToken_type(), tokenNew.getToken_type());
    TestMgr.check(token.getRefresh_token().equals(tokenNew.getRefresh_token()), false);
    TestMgr.check(token.getAccess_token().equals(tokenNew.getAccess_token()), false);
    TestMgr.check(token.getId_token().equals(tokenNew.getId_token()), false);

    return tokenNew;
  }

  private void testHanlderAuth(String token, String type) {
    // get resources
    String name;
    name = handlerAuthService.everyoneSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = handlerAuthService.adminSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = handlerAuthService.guestOrAdminSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = null;
    try {
      name = handlerAuthService.guestSayHello("Hi", "Bearer " + token, type);
      TestMgr.check("must fail", "not fail");
    } catch (InvocationException e) {
      TestMgr.check(403, e.getStatusCode());
    }
    TestMgr.check(null, name);
  }

  private void testMethodAuth(String token, String type) {
    // get resources
    String name;
    name = preMethodAuthService.everyoneSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = preMethodAuthService.adminSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = preMethodAuthService.guestOrAdminSayHello("Hi", "Bearer " + token, type);
    TestMgr.check("Hi", name);

    name = null;
    try {
      name = preMethodAuthService.guestSayHello("Hi", "Bearer " + token, type);
      TestMgr.check("must fail", "not fail");
    } catch (InvocationException e) {
      TestMgr.check(403, e.getStatusCode());
    }
    TestMgr.check(null, name);
  }
}

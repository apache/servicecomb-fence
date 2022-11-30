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

import org.apache.servicecomb.fence.edge.TokenResponse;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;

@Component
public class TokenExpireTestCase implements TestCase {
  @Override
  public void run() {
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

  private TokenResponse getTokenByPassword() {
    // get token
    MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
    map.add("grant_type", "password");
    map.add("username", "guestExpiresQuickly");
    map.add("password", "changeMyPassword");
    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.MULTIPART_FORM_DATA);

    TokenResponse token =
        BootEventListener.edgeServiceTokenEndpoint.postForObject("/",
            new HttpEntity<>(map, headers),
            TokenResponse.class);
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
    name = BootEventListener.resouceServerHandlerAuthEndpoint.postForObject("/everyoneSayHello?name=Hi",
        new HttpEntity<>(headers),
        String.class);
    TestMgr.check("Hi", name);

    name = BootEventListener.resouceServerHandlerAuthEndpoint.postForObject("/guestOrAdminSayHello?name=Hi",
        new HttpEntity<>(headers),
        String.class);
    TestMgr.check("Hi", name);

    name = BootEventListener.resouceServerHandlerAuthEndpoint.postForObject("/guestSayHello?name=Hi",
        new HttpEntity<>(headers),
        String.class);
    TestMgr.check("Hi", name);

    // user guestExpiresQuickly token expires in 3 seconds
    try {
      Thread.sleep(3000);
      name = BootEventListener.resouceServerHandlerAuthEndpoint.postForObject("/guestSayHello?name=Hi",
          new HttpEntity<>(headers),
          String.class);
      TestMgr.check("must fail", "not fail");
    } catch (HttpClientErrorException e) {
      TestMgr.check(403, e.getStatusCode().value());
    } catch (Exception e2) {
      TestMgr.failed("", e2);
    }
  }
}

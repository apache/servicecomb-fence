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

package org.apache.servicecomb.authentication;

import org.apache.servicecomb.authentication.server.TokenResponse;
import org.apache.servicecomb.authentication.util.CommonConstants;
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
    String idToken = idToken();
    testHanlderAuth(idToken);
  }

  private String idToken() {
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
    return token.getId_token();
  }

  private void testHanlderAuth(String accessToken) {
    // get resources
    HttpHeaders headers = new HttpHeaders();
    headers = new HttpHeaders();
    headers.add("Authorization", "Bearer " + accessToken);
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

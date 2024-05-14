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
import java.util.Set;

import org.apache.servicecomb.fence.token.OpenIDToken;

public class TokenResponse {
  // Naming conventions https://tools.ietf.org/html/draft-ietf-oauth-v2-http-mac-00#section-3.1
  private String token_type;

  private String access_token;

  private String refresh_token;

  // Naming conventions https://openid.net/specs/openid-connect-basic-1_0.html#ObtainingTokens
  private String id_token;

  private long expires_in;

  private Set<String> scope;

  private Map<String, Object> additionalInformation;

  public String getToken_type() {
    return token_type;
  }

  public void setToken_type(String token_type) {
    this.token_type = token_type;
  }

  public String getAccess_token() {
    return access_token;
  }

  public void setAccess_token(String access_token) {
    this.access_token = access_token;
  }

  public String getRefresh_token() {
    return refresh_token;
  }

  public void setRefresh_token(String refresh_token) {
    this.refresh_token = refresh_token;
  }

  public long getExpires_in() {
    return expires_in;
  }

  public void setExpires_in(long expires_in) {
    this.expires_in = expires_in;
  }

  public String getId_token() {
    return id_token;
  }

  public void setId_token(String id_token) {
    this.id_token = id_token;
  }

  public Set<String> getScope() {
    return scope;
  }

  public void setScope(Set<String> scope) {
    this.scope = scope;
  }

  public Map<String, Object> getAdditionalInformation() {
    return additionalInformation;
  }

  public void setAdditionalInformation(Map<String, Object> additionalInformation) {
    this.additionalInformation = additionalInformation;
  }

  public static TokenResponse fromOpenIDToken(OpenIDToken openIDToken) {
    TokenResponse token = new TokenResponse();
    token.setAccess_token(openIDToken.getAccessToken().getValue());
    token.setRefresh_token(openIDToken.getRefreshToken().getValue());
    token.setId_token(openIDToken.getIdToken().getValue());

    token.setAdditionalInformation(openIDToken.getAdditionalInformation());
    token.setScope(openIDToken.getScope());
    token.setExpires_in(openIDToken.getExpiresIn());
    token.setToken_type(openIDToken.getTokenType());

    return token;
  }
}

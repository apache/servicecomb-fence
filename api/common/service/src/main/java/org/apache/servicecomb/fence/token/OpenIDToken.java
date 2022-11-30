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

package org.apache.servicecomb.fence.token;

import java.util.Map;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class OpenIDToken implements Token {
  /**
   * 
   */
  private static final long serialVersionUID = 6252768307298115467L;

  private String tokenType;

  private SessionToken accessToken;

  private SessionToken refreshToken;

  private JWTToken idToken;

  private Set<String> scope;

  public String getTokenType() {
    return tokenType;
  }

  public void setTokenType(String tokenType) {
    this.tokenType = tokenType;
  }

  public SessionToken getAccessToken() {
    return accessToken;
  }

  public void setAccessToken(SessionToken accessToken) {
    this.accessToken = accessToken;
  }

  public SessionToken getRefreshToken() {
    return refreshToken;
  }

  public void setRefreshToken(SessionToken refreshToken) {
    this.refreshToken = refreshToken;
  }

  public JWTToken getIdToken() {
    return idToken;
  }

  public void setIdToken(JWTToken idToken) {
    this.idToken = idToken;
  }

  public Set<String> getScope() {
    return scope;
  }

  public void setScope(Set<String> scope) {
    this.scope = scope;
  }

  @Override
  @JsonIgnore
  public String getUsername() {
    return accessToken.getUsername();
  }

  @Override
  @JsonIgnore
  public boolean isExpired() {
    return accessToken.isExpired();
  }

  @Override
  @JsonIgnore
  public long getIssueAt() {
    return accessToken.getIssueAt();
  }

  @Override
  @JsonIgnore
  public long getExpiresIn() {
    return accessToken.getExpiresIn();
  }

  @Override
  @JsonIgnore
  public long getNotBefore() {
    return accessToken.getNotBefore();
  }

  @Override
  @JsonIgnore
  public String getValue() {
    return accessToken.getValue();
  }

  @Override
  @JsonIgnore
  public Map<String, Object> getAdditionalInformation() {
    return accessToken.getAdditionalInformation();
  }

  @Override
  @JsonIgnore
  public void addAdditionalInformation(String key, Object value) {
    accessToken.addAdditionalInformation(key, value);
  }
}

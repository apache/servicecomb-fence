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

package org.apache.servicecomb.authentication.token;

import java.util.Map;

import org.apache.servicecomb.authentication.jwt.JWTClaims;
import org.apache.servicecomb.authentication.jwt.JsonParser;
import org.springframework.security.jwt.Jwt;
import org.springframework.security.jwt.JwtHelper;
import org.springframework.security.jwt.crypto.sign.Signer;

public class JWTTokenImpl implements JWTToken {
  private JWTClaims claims;

  private boolean valueCalculated = false;

  private String value;

  private Signer signer;

  public JWTTokenImpl(JWTClaims claims, Signer signer) {
    this.claims = claims;
    this.signer = signer;
  }

  @Override
  public boolean isExpired() {
    return System.currentTimeMillis() - this.getIssueAt() > this.getExpiresIn() * 1000;
  }

  @Override
  public long getIssueAt() {
    return this.claims.getIat();
  }

  @Override
  public long getExpiresIn() {
    return this.claims.getExp();
  }

  @Override
  public long getNotBefore() {
    return this.claims.getNbf();
  }

  @Override
  public String getValue() {
    if (!this.valueCalculated) {
      String content = JsonParser.unparse(claims);
      Jwt jwtToken = JwtHelper.encode(content, signer);
      this.value = jwtToken.getEncoded();
    }
    return this.value;
  }

  @Override
  public Map<String, Object> getAdditionalInformation() {
    return this.claims.getAdditionalInformation();
  }

  @Override
  public String username() {
    return this.claims.getSub();
  }
  
  public JWTClaims getClaims() {
    return this.claims;
  }
}

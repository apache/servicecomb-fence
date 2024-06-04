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

import java.util.UUID;

import org.apache.servicecomb.fence.jwt.JWTClaims;
import org.apache.servicecomb.fence.jwt.JsonParser;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.jwt.Jwt;
import org.springframework.security.jwt.JwtHelper;
import org.springframework.security.jwt.crypto.sign.SignatureVerifier;
import org.springframework.security.jwt.crypto.sign.Signer;

public class JWTTokenStoreImpl implements JWTTokenStore {
  private Signer signer;

  private SignatureVerifier signatureVerifier;

  public JWTTokenStoreImpl(Signer signer, SignatureVerifier signatureVerifier) {
    this.signer = signer;
    this.signatureVerifier = signatureVerifier;
  }

  @Override
  public JWTToken createToken(UserDetails userDetails) {
    JWTClaims claims = new JWTClaims();
    claims.setSub(userDetails.getUsername());
    if (userDetails.getAuthorities() != null) {
      userDetails.getAuthorities().forEach(authority -> claims.addAuthority(authority.getAuthority()));
    }

    TokenDynamicProperties config = TokenDynamicPropertiesManager.getTokenConfiguration(userDetails.getUsername());
    claims.setJti(UUID.randomUUID().toString());
    claims.setIat(System.currentTimeMillis());
    claims.setExp(config.expiresIn);
    claims.setNbf(config.notBefore);
    // Maybe some other properties in future

    return new JWTToken(claims, signer);
  }

  public JWTToken createTokenByValue(String value) {
    Jwt jwt = JwtHelper.decode(value);
    JWTClaims claims;
    try {
      jwt.verifySignature(signatureVerifier);
      claims = JsonParser.parse(jwt.getClaims(), JWTClaims.class);
    } catch (Exception e) {
      return null;
    }
    return new JWTToken(claims, signer);
  }
}

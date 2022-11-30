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

import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.jwt.crypto.sign.Signer;
import org.springframework.security.jwt.crypto.sign.SignerVerifier;

@Configuration
public class TokenStoreConfiguration {
  @Bean(name = {CommonConstants.BEAN_AUTH_ACCESS_TOKEN_STORE,
      CommonConstants.BEAN_AUTH_REFRESH_TOKEN_STORE})
  @ConditionalOnMissingBean
  public SessionTokenStore sessionTokenStore() {
    return new SessionTokenStore();
  }

  @Bean(name = {CommonConstants.BEAN_AUTH_ID_TOKEN_STORE})
  @ConditionalOnMissingBean
  public JWTTokenStore jwtTokenStore(@Autowired @Qualifier(CommonConstants.BEAN_AUTH_SIGNER) Signer signer,
      @Autowired @Qualifier(CommonConstants.BEAN_AUTH_SIGNATURE_VERIFIER) SignerVerifier signerVerifier) {
    return new JWTTokenStoreImpl(signer, signerVerifier);
  }
}

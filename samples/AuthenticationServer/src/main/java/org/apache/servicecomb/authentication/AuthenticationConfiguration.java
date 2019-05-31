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

import java.util.Arrays;

import org.apache.servicecomb.authentication.token.InMemorySessionIDTokenStore;
import org.apache.servicecomb.authentication.token.JWTTokenStore;
import org.apache.servicecomb.authentication.token.TokenStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.security.jwt.crypto.sign.MacSigner;
import org.springframework.security.jwt.crypto.sign.SignatureVerifier;
import org.springframework.security.jwt.crypto.sign.Signer;
import org.springframework.security.jwt.crypto.sign.SignerVerifier;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AuthenticationConfiguration {
  @Bean(name = "authPasswordEncoder")
  public PasswordEncoder authPasswordEncoder() {
    return new Pbkdf2PasswordEncoder();
  }

  @Bean(name = {"authSigner", "authSignatureVerifier"})
  public SignerVerifier authSignerVerifier() {
    // If using RSA, need to configure authSigner and authSignatureVerifier separately. 
    // If using MacSigner, need to protect the shared key by properly encryption.
    return new MacSigner("Please change this key.");
  }

  @Bean(name = {"authAccessTokenStore", "authRefreshTokenStore"})
  public TokenStore sessionIDTokenStore() {
    // Use in memory store for testing. Need to implement JDBC or Redis SessionIDTokenStore in product. 
    return new InMemorySessionIDTokenStore();
  }

  @Bean(name = "authIDTokenStore")
  public TokenStore authIDTokenStore(@Autowired @Qualifier("authSigner") Signer signer,
      @Autowired @Qualifier("authSignatureVerifier") SignatureVerifier signerVerifier) {
    return new JWTTokenStore(signer, signerVerifier);
  }

  @Bean(name = "authUserDetailsService")
  public UserDetailsService authUserDetailsService(
      @Autowired @Qualifier("authPasswordEncoder") PasswordEncoder passwordEncoder) {
    // Use in memory UserDetails, need to implement JDBC or others in product
    InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
    UserDetails uAdmin = new User("admin", passwordEncoder.encode("changeMyPassword"),
        Arrays.asList(new SimpleGrantedAuthority("ADMIN")));
    UserDetails uGuest = new User("guest", passwordEncoder.encode("changeMyPassword"),
        Arrays.asList(new SimpleGrantedAuthority("GUEST")));
    manager.createUser(uAdmin);
    manager.createUser(uGuest);
    return manager;
  }
}

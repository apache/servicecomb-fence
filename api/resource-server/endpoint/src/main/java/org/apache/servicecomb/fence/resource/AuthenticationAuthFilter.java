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

package org.apache.servicecomb.fence.resource;

import java.util.HashSet;
import java.util.Set;

import org.apache.servicecomb.fence.token.JWTToken;
import org.apache.servicecomb.fence.token.JWTTokenStore;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.foundation.common.utils.BeanUtils;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.context.SecurityContextImpl;
import org.springframework.stereotype.Component;

@Component
@Order(0)
public class AuthenticationAuthFilter implements AuthFilter {

  @Override
  public void doFilter(Invocation invocation) throws InvocationException {
    AccessDynamicProperties config = AccessDynamicPropertiesManager.getAccessConfiguration(invocation);

    // by pass authentication
    if (!config.needAuth) {
      // TODO : shall we do authorization without authenticated? 
      createSecurityContext(new HashSet<>());
      return;
    }

    String idTokenValue = invocation.getContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION);
    if (idTokenValue == null) {
      throw new InvocationException(403, "forbidden", "not authenticated");
    }

    // verify tokens
    JWTTokenStore store = BeanUtils.getBean(CommonConstants.BEAN_AUTH_ID_TOKEN_STORE);
    JWTToken idToken = store.createTokenByValue(idTokenValue);
    if (idToken == null) {
      throw new InvocationException(403, "forbidden", "not authenticated");
    }

    Set<GrantedAuthority> grantedAuthorities = new HashSet<>(idToken.getClaims().getAuthorities().size());
    idToken.getClaims().getAuthorities().forEach(v -> grantedAuthorities.add(new SimpleGrantedAuthority(v)));
    createSecurityContext(grantedAuthorities);
  }

  private void createSecurityContext(Set<GrantedAuthority> grantedAuthorities) {
    SecurityContext sc = new SecurityContextImpl();
    Authentication authentication = new SimpleAuthentication(true, grantedAuthorities);
    sc.setAuthentication(authentication);
    SecurityContextHolder.setContext(sc);
  }
}

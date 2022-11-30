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

import java.util.Collection;
import java.util.HashSet;

import org.apache.commons.lang3.StringUtils;
import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@Order(100)
public class ConfigBasedAuthoriaztionAuthFilter implements AuthFilter {

  @Override
  public void doFilter(Invocation invocation) throws InvocationException {
    AccessDynamicProperties config = AccessDynamicPropertiesManager.getAccessConfiguration(invocation);
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    // check roles
    if (!StringUtils.isEmpty(config.roles)) {
      String[] roles = config.roles.split(",");
      if (roles.length > 0) {
        boolean valid = false;
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        Collection<String> authoritiesNames = new HashSet<String>();
        authorities.forEach(a -> authoritiesNames.add(a.getAuthority()));
        for (String role : roles) {
          if (authoritiesNames.contains(role)) {
            valid = true;
            break;
          }
        }
        if (!valid) {
          throw new InvocationException(403, "forbidden", "not authenticated");
        }
      }
    }
  }

}

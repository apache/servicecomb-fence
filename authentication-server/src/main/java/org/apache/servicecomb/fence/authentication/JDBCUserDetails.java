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

package org.apache.servicecomb.fence.authentication;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.apache.servicecomb.fence.authentication.user.UserInfo;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class JDBCUserDetails implements UserDetails {
  private static final long serialVersionUID = -8279248170258388057L;

  private UserInfo info;

  public JDBCUserDetails(UserInfo info) {
    this.info = info;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    Set<String> roles = info.getRoles();
    Set<SimpleGrantedAuthority> grantedAuthorities = new HashSet<>(roles.size());
    roles.forEach(r -> grantedAuthorities.add(new SimpleGrantedAuthority(r)));
    return grantedAuthorities;
  }

  @Override
  public String getPassword() {
    return info.getPassword();
  }

  @Override
  public String getUsername() {
    return info.getUsername();
  }

  @Override
  public boolean isAccountNonExpired() {
    return info.isAccountNonExpired();
  }

  @Override
  public boolean isAccountNonLocked() {
    return info.isAccountNonLocked();
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return info.isCredentialsNonExpired();
  }

  @Override
  public boolean isEnabled() {
    return info.isEnabled();
  }

}

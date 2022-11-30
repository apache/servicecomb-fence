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

import org.apache.servicecomb.fence.authentication.user.UserInfo;
import org.apache.servicecomb.fence.authentication.user.UserMapper;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Component;

@Component(CommonConstants.BEAN_AUTH_USER_DETAILS_SERVICE)
public class JDBCUserDetailsManager implements UserDetailsManager {

  @Autowired
  private UserMapper userMapper;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    UserInfo info = userMapper.selectUserByUsername(username);
    if (info == null) {
      throw new UsernameNotFoundException("");
    }
    info.setRoles(userMapper.selectRolesByUsername(username));
    return new JDBCUserDetails(info);
  }

  @Override
  public void createUser(UserDetails user) {
    // TODO Auto-generated method stub

  }

  @Override
  public void updateUser(UserDetails user) {
    // TODO Auto-generated method stub

  }

  @Override
  public void deleteUser(String username) {
    // TODO Auto-generated method stub

  }

  @Override
  public void changePassword(String oldPassword, String newPassword) {
    // TODO Auto-generated method stub

  }

  @Override
  public boolean userExists(String username) {
    // TODO Auto-generated method stub
    return false;
  }

}

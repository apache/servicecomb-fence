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

package org.apache.servicecomb.fence.authentication.user;

import java.util.Set;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
  @Select("select * from T_USERS where USER_NAME = #{username}")
  @Results(id = "userInfo", value = {
      @Result(property = "id", column = "ID"),
      @Result(property = "password", column = "PASSWORD"),
      @Result(property = "username", column = "USER_NAME"),
      @Result(property = "accountNonExpired", column = "ACCOUNT_NON_EXPIRED"),
      @Result(property = "accountNonLocked", column = "ACCOUNT_NON_LOCKED"),
      @Result(property = "credentialsNonExpired", column = "CREDENTIALS_NON_EXPIRED"),
      @Result(property = "enabled", column = "TINYINT")
  })
  UserInfo selectUserByUsername(@Param("username") String username);

  @Select("select ROLE_NAME from T_ROLES where USER_NAME = #{username}")
  Set<String> selectRolesByUsername(@Param("username") String username);
}

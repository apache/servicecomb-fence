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

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TokenMapper {
  @Insert("""
      insert into
      T_TOKENS(ACCESS_TOKEN_VALUE,REFRESH_TOKEN_VALUE,TOKEN)
      values(#{accessTokenId},#{refreshTokenId},#{tokenInfo})""")
  void insertNewToken(@Param("accessTokenId") String accessTokenId,
      @Param("refreshTokenId") String refreshTokenId,
      @Param("tokenInfo") String tokenInfo);

  @Select("""
      select TOKEN
      from T_TOKENS where ACCESS_TOKEN_VALUE =
      #{accessTokenId}""")
  String getTokenInfoByAccessTokenId(@Param("accessTokenId") String accessTokenId);

  @Select("""
      select TOKEN
      from T_TOKENS where REFRESH_TOKEN_VALUE =
      #{refreshTokenId}""")
  String getTokenInfoByRefreshTokenId(@Param("refreshTokenId") String refreshTokenId);
}

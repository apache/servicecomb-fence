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

public class AuthenticationServerConstants {
  public static final String PARAM_GRANT_TYPE = "grant_type";

  public static final String PARAM_USERNAME = "username";

  public static final String PARAM_PASSWORD = "password";

  public static final String PARAM_REFRESH_TOKEN = "refresh_token";

  public static final String PARAM_ACCESS_TOKEN = "access_token";

  public static final String PARAM_PROVIDER = "provider";

  public static final String PARAM_CODE = "code";

  public static final String PARAM_STATE = "state";

  public static final String PARAM_LOGIN = "login";
  
  public static final String GRANT_TYPE_PASSWORD = "password";

  public static final String GRANT_TYPE_THIRD_PARTY = "third_party";

  public static final String GRANT_TYPE_THIRD_PARTY_GITHUB = "github";
  
  public static final String GRANT_TYPE_REFRESH_TOKEN = "refresh_token";

  public static final String CONFIG_GRANTER_PASSWORD_ENABLED = "servicecomb.authentication.granter.password.enabled";

  public static final String CONFIG_GRANTER_THIRD_GITHUB_ENABLED =
      "servicecomb.authentication.granter.thirdParty.github.enabled";

  public static final String CONFIG_GRANTER_REFRESH_TOKEN_ENABLED =
      "servicecomb.authentication.granter.refreshToken.enabled";
  
  public static final String TOKEN_ADDTIONAL_INFORMATION_GITHUB_TOKEN = "github-token";
}

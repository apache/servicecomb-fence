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

import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.servicecomb.fence.token.OpenIDToken;

public interface ThirdPartyTokenGranter extends TokenGranter {

  @Override
  default String grantType() {
    return AuthenticationServerConstants.GRANT_TYPE_THIRD_PARTY;
  }

  @Override
  default OpenIDToken grant(Map<String, String> parameters) {
    String provider = parameters.get(AuthenticationServerConstants.PARAM_PROVIDER);
    String code = parameters.get(AuthenticationServerConstants.PARAM_CODE);
    String state = parameters.get(AuthenticationServerConstants.PARAM_STATE);
    String login = parameters.get(AuthenticationServerConstants.PARAM_LOGIN);
    
    // login can be null
    if (StringUtils.isEmpty(provider) || StringUtils.isEmpty(code) || StringUtils.isEmpty(state)) {
      return null;
    }

    if (!name().equals(provider)) {
      return null;
    }

    return grant(code, state, login);
  }

  String name();

  OpenIDToken grant(String code, String state, String login);
  
  /**
   * In authorization code mode, need to get authentication provider information first.
   */
  String providerInfo(String provider, String redirectURI, String login, String scope, String initialState);
}

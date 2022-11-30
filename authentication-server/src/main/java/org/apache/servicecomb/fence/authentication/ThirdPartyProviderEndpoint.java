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

import java.util.List;

import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestSchema(schemaId = "ThirdPartyProviderEndpoint")
@RequestMapping(path = "/v1/thirdParty")
public class ThirdPartyProviderEndpoint implements ThirdPartyProviderService {
  @Autowired
  private List<ThirdPartyTokenGranter> granters;

  @Override
  @GetMapping(path = "/providerInfo/{provider}")
  public String providerInfo(@PathVariable(name = "provider") String provider,
      @RequestParam(name = "login", required = false) String login,
      @RequestParam(name = "redirectURI") String redirectURI,
      @RequestParam(name = "scope", required = false) String scope,
      @CookieValue(name = "initialState") String initialState) {

    for (ThirdPartyTokenGranter granter : granters) {
      if (granter.enabled() && granter.name().equals(provider)) {
        String info = granter.providerInfo(provider, redirectURI, login, scope, initialState);
        if (info != null) {
          return info;
        }
      }
    }

    return null;
  }
}

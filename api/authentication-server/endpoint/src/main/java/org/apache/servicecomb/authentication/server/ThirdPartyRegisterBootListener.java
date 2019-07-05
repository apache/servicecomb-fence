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

package org.apache.servicecomb.authentication.server;

import java.util.Collections;

import org.apache.servicecomb.core.BootListener;
import org.apache.servicecomb.serviceregistry.RegistryUtils;
import org.springframework.stereotype.Component;

//see: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
@Component
public class ThirdPartyRegisterBootListener implements BootListener {
  private static final String GITHUB_ENDPOINT = "rest://github.com:443?sslEnabled=true";

  @Override
  public void onBootEvent(BootEvent event) {
    if (BootListener.EventType.AFTER_REGISTRY.equals(event.getEventType())) {
      RegistryUtils.getServiceRegistry().registerMicroserviceMappingByEndpoints(
          // 3rd party rest service name
          "githubAuthService",
          // service version
          "1.0.0",
          // list of endpoints
          Collections.singletonList(GITHUB_ENDPOINT),
          // java interface class to generate swagger schema
          GithubAuthService.class);
    }
  }

}

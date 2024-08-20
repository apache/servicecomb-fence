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
package org.apache.servicecomb.fence.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.apache.servicecomb.config.BootStrapProperties;
import org.apache.servicecomb.fence.api.admin.AdminDiscoveryService;
import org.apache.servicecomb.fence.api.admin.FindServiceInstancesResponse;
import org.apache.servicecomb.fence.api.admin.FindServicesResponse;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.apache.servicecomb.registry.api.Discovery;
import org.apache.servicecomb.registry.api.DiscoveryInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.util.CollectionUtils;

@RestSchema(schemaId = AdminDiscoveryService.NAME, schemaInterface = AdminDiscoveryService.class)
public class AdminDiscoveryEndpoint implements AdminDiscoveryService {
  private List<Discovery<? extends DiscoveryInstance>> discoveryList;

  private final String application;

  private final String environment;

  @Autowired
  public AdminDiscoveryEndpoint(Environment environment) {
    this.application = BootStrapProperties.readApplication(environment);
    this.environment = BootStrapProperties.readServiceEnvironment(environment);
  }

  @Autowired
  public void setDiscoveryList(List<Discovery<? extends DiscoveryInstance>> discoveryList) {
    this.discoveryList = discoveryList;
  }

  @Override
  public FindServicesResponse findServices() {
    List<String> result = new ArrayList<>();
    for (Discovery<? extends DiscoveryInstance> discovery : discoveryList) {
      if (!discovery.enabled()) {
        continue;
      }
      List<String> temp = discovery.findServices(application);
      if (CollectionUtils.isEmpty(temp)) {
        continue;
      }
      result.addAll(temp);
    }
    FindServicesResponse response = new FindServicesResponse();
    response.setEnvironment(environment).setApplication(application)
        .setServices(result.stream().distinct().collect(Collectors.toList()));
    return response;
  }

  @Override
  public FindServiceInstancesResponse findServiceInstances(String serviceName) {
    List<DiscoveryInstance> result = new ArrayList<>();
    for (Discovery<? extends DiscoveryInstance> discovery : discoveryList) {
      if (!discovery.enabled() || !discovery.enabled(application, serviceName)) {
        continue;
      }
      List<? extends DiscoveryInstance> temp = discovery.findServiceInstances(application, serviceName);
      if (CollectionUtils.isEmpty(temp)) {
        continue;
      }
      result.addAll(temp);
    }
    FindServiceInstancesResponse response = new FindServiceInstancesResponse();
    response.setInstances(result);
    return response;
  }
}

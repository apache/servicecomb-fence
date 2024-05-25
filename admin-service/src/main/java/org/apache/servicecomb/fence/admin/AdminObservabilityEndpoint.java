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
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

import org.apache.servicecomb.config.BootStrapProperties;
import org.apache.servicecomb.core.Endpoint;
import org.apache.servicecomb.core.invocation.endpoint.EndpointUtils;
import org.apache.servicecomb.fence.admin.dependencies.AsyncObservabilityService;
import org.apache.servicecomb.fence.api.admin.AdminObservabilityService;
import org.apache.servicecomb.fence.api.observability.SearchLogResponse;
import org.apache.servicecomb.fence.api.observability.SearchTraceResponse;
import org.apache.servicecomb.fence.api.observability.Trace;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.apache.servicecomb.registry.DiscoveryManager;
import org.apache.servicecomb.registry.api.DiscoveryInstance;
import org.apache.servicecomb.swagger.invocation.exception.CommonExceptionData;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;

import jakarta.servlet.http.Part;
import jakarta.ws.rs.core.Response.Status;

@RestSchema(schemaId = AdminObservabilityService.NAME, schemaInterface = AdminObservabilityService.class)
public class AdminObservabilityEndpoint implements AdminObservabilityService {
  private static final Logger LOGGER = LoggerFactory.getLogger(AdminObservabilityEndpoint.class);

  private AsyncObservabilityService asyncObservabilityService;

  private DiscoveryManager discoveryManager;

  private final String application;

  @Autowired
  public AdminObservabilityEndpoint(Environment environment) {
    this.application = BootStrapProperties.readApplication(environment);
  }

  @Autowired
  public void setDiscoveryManager(DiscoveryManager discoveryManager) {
    this.discoveryManager = discoveryManager;
  }

  @Autowired
  public void setAsyncObservabilityService(AsyncObservabilityService asyncObservabilityService) {
    this.asyncObservabilityService = asyncObservabilityService;
  }

  @Override
  public List<SearchTraceResponse> searchTrace(String timestamp, String traceId) {
    List<String> services = discoveryManager.getPrimaryDiscovery().findServices(application);
    List<SearchTraceResponse> responses = new ArrayList<>();

    for (String serviceName : services) {
      List<? extends DiscoveryInstance> instances =
          discoveryManager.getPrimaryDiscovery().findServiceInstances(application, serviceName);
      if (instances.isEmpty()) {
        continue;
      }
      CountDownLatch latch = new CountDownLatch(instances.size());
      for (DiscoveryInstance instance : instances) {
        if (instance.getEndpoints().isEmpty()) {
          latch.countDown();
          continue;
        }
        try {
          asyncObservabilityService.searchTrace(
              EndpointUtils.parse(instance.getEndpoints().get(0)),
              timestamp, traceId).whenComplete((response, throwable) -> {
            if (throwable != null) {
              latch.countDown();
              LOGGER.error("search trace from {} failed", instance.getInstanceId(), throwable);
              return;
            }
            if (!response.getData().isEmpty()) {
              responses.add(response);
            }
            latch.countDown();
          });
        } catch (Exception e) {
          latch.countDown();
          LOGGER.error("search trace failed", e);
        }
      }
      try {
        if (!latch.await(30, TimeUnit.SECONDS)) {
          LOGGER.error("search trace from some instance failed");
        }
      } catch (InterruptedException e) {
        LOGGER.error("search trace failed", e);
      }
    }

    responses.sort((a, b) -> Long.compare(findStamp(b), findStamp(a)));
    return responses;
  }

  private long findStamp(SearchTraceResponse a) {
    for (Trace trace : a.getData()) {
      if (trace.isShared() || trace.getParentId() == null) {
        return trace.getDuration();
      }
    }
    return 0;
  }

  @Override
  public List<SearchLogResponse> searchLog(String timestamp, String traceId) {
    List<String> services = discoveryManager.getPrimaryDiscovery().findServices(application);
    List<SearchLogResponse> responses = new ArrayList<>();

    for (String serviceName : services) {
      List<? extends DiscoveryInstance> instances =
          discoveryManager.getPrimaryDiscovery().findServiceInstances(application, serviceName);
      CountDownLatch latch = new CountDownLatch(instances.size());
      for (DiscoveryInstance instance : instances) {
        if (instance.getEndpoints().isEmpty()) {
          latch.countDown();
          continue;
        }
        try {
          asyncObservabilityService.searchLog(
              EndpointUtils.parse(instance.getEndpoints().get(0)),
              timestamp, traceId).whenComplete((response, throwable) -> {
            if (throwable != null) {
              latch.countDown();
              LOGGER.error("search log from {} failed", instance.getInstanceId(), throwable);
              return;
            }
            if (!response.getData().isEmpty()) {
              responses.add(response);
            }
            latch.countDown();
          });
        } catch (Exception e) {
          latch.countDown();
          LOGGER.error("search log failed", e);
        }
      }
      try {
        if (!latch.await(30, TimeUnit.SECONDS)) {
          LOGGER.error("search log from some instance failed");
        }
      } catch (InterruptedException e) {
        LOGGER.error("search log failed", e);
      }
    }
    return responses;
  }

  @Override
  public Part downloadLog(String timestamp, String serviceName, String instanceId) {
    return asyncObservabilityService.downloadLog(getEndpoint(serviceName, instanceId), timestamp);
  }

  @Override
  public Part downloadMetrics(String timestamp, String serviceName, String instanceId) {
    return asyncObservabilityService.downloadMetrics(getEndpoint(serviceName, instanceId), timestamp);
  }

  private Endpoint getEndpoint(String serviceName, String instanceId) {
    List<? extends DiscoveryInstance> instances = discoveryManager.findServiceInstances(application, serviceName)
        .stream().filter(e -> e.getInstanceId().equals(instanceId)).toList();
    if (instances.isEmpty() || instances.get(0).getEndpoints().isEmpty()) {
      throw new InvocationException(Status.BAD_REQUEST, new CommonExceptionData("invalid instance."));
    }
    try {
      return EndpointUtils.parse(instances.get(0).getEndpoints().get(0));
    } catch (Exception e) {
      throw new InvocationException(Status.INTERNAL_SERVER_ERROR, new CommonExceptionData(e.getMessage()));
    }
  }
}

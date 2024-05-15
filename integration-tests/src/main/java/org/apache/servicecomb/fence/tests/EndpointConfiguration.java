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
package org.apache.servicecomb.fence.tests;

import java.util.List;

import org.apache.servicecomb.fence.api.edge.TokenService;
import org.apache.servicecomb.localregistry.RegistryBean;
import org.apache.servicecomb.localregistry.RegistryBean.Instance;
import org.apache.servicecomb.localregistry.RegistryBean.Instances;
import org.apache.servicecomb.provider.pojo.Invoker;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.ws.rs.QueryParam;

@Configuration
public class EndpointConfiguration {
  // Need add header Authentication to HandlerAuthService
  @RequestMapping(path = "/api/resource/v1/auth/handler")
  public interface HandlerAuthService {
    @PostMapping(path = "/adminSayHello")
    String adminSayHello(@QueryParam("name") String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/guestSayHello")
    String guestSayHello(@QueryParam("name") String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/guestOrAdminSayHello")
    String guestOrAdminSayHello(@QueryParam("name") String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/everyoneSayHello")
    String everyoneSayHello(@QueryParam("name") String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);
  }

  @RequestMapping(path = "/api/resource/v1/auth/method")
  public interface PreMethodAuthService {
    @PostMapping(path = "/adminSayHello")
    String adminSayHello(String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/guestSayHello")
    String guestSayHello(String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/guestOrAdminSayHello")
    String guestOrAdminSayHello(String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);

    @PostMapping(path = "/everyoneSayHello")
    String everyoneSayHello(String name, @RequestHeader("Authorization") String authorization,
        @RequestHeader("Authorization-Type") String authenticationType);
  }


  @Bean
  public RegistryBean resourceServerRegistryBean(Environment environment) {
    return new RegistryBean()
        .addSchemaInterface("HandlerAuthEndpoint", HandlerAuthService.class)
        .addSchemaInterface("PreMethodAuthEndpoint", PreMethodAuthService.class)
        .setAppId("scb-fence")
        .setServiceName("resource-server-edge")
        .setVersion("0.0.1")
        .setInstances(new Instances().setInstances(List.of(new Instance()
            .setEndpoints(List.of("rest://localhost:9090"))))); // from edge
  }

  @Bean
  public HandlerAuthService handlerAuthService() {
    return Invoker.createProxy("resource-server-edge", "HandlerAuthEndpoint", HandlerAuthService.class);
  }

  @Bean
  public PreMethodAuthService preMethodAuthService() {
    return Invoker.createProxy("resource-server-edge", "PreMethodAuthEndpoint", PreMethodAuthService.class);
  }

  @Bean
  public TokenService tokenService() {
    return Invoker.createProxy("edge-service", "TokenEndpoint", TokenService.class);
  }
}

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

import java.util.ArrayList;
import java.util.List;

import org.apache.servicecomb.config.BootStrapProperties;
import org.apache.servicecomb.localregistry.RegistryBean;
import org.apache.servicecomb.localregistry.RegistryBean.Instance;
import org.apache.servicecomb.localregistry.RegistryBean.Instances;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

//see: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
@Configuration
public class GithubOAuthServiceRegister {
  public static final String GITHUB_ENDPOINT = "rest://github.com:443?sslEnabled=true";

  public static final String GITHUB_SERVICE_NAME = "github";

  public static final String GITHUB_SERVICE_VERSION = "1.0";

  @Bean
  public RegistryBean githubOAuthServiceRegistryBean(@Autowired Environment environment) {
    List<String> endpoints = new ArrayList<>();
    endpoints.add(GITHUB_ENDPOINT);
    List<Instance> instances = new ArrayList<>();
    instances.add(new Instance().setEndpoints(endpoints));

    return new RegistryBean()
        .setServiceName(GITHUB_SERVICE_NAME)
        .setId(GITHUB_SERVICE_NAME)
        .setVersion(GITHUB_SERVICE_VERSION)
        .setAppId(BootStrapProperties.readApplication(environment))
        .addSchemaInterface("GithubOAuthService", GithubOAuthService.class)
        .setInstances(new Instances().setInstances(instances));
  }
}

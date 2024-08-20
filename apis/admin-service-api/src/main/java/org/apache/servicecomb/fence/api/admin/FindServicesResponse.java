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
package org.apache.servicecomb.fence.api.admin;

import java.util.List;

public class FindServicesResponse {
  private String environment;

  private String application;

  private List<String> services;

  public String getEnvironment() {
    return environment;
  }

  public FindServicesResponse setEnvironment(String environment) {
    this.environment = environment;
    return this;
  }

  public String getApplication() {
    return application;
  }

  public FindServicesResponse setApplication(String application) {
    this.application = application;
    return this;
  }

  public List<String> getServices() {
    return services;
  }

  public FindServicesResponse setServices(List<String> services) {
    this.services = services;
    return this;
  }
}

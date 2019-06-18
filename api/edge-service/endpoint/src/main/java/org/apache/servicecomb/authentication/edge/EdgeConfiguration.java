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

package org.apache.servicecomb.authentication.edge;

import org.apache.servicecomb.authentication.util.Constants;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class EdgeConfiguration {
  @Bean(name = {Constants.BEAN_AUTH_EDGE_TOKEN_RESPONSE_PROCESSOR})
  @Order(Constants.BEAN_DEFAULT_ORDER)
  public EdgeTokenResponseProcessor edgeTokenResponseProcessor() {
    return new DumyEdgeTokenResponseProcessor();
  }
}

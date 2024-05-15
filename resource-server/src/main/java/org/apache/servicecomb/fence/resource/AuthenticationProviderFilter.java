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

package org.apache.servicecomb.fence.resource;

import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.core.filter.AbstractFilter;
import org.apache.servicecomb.core.filter.Filter;
import org.apache.servicecomb.core.filter.FilterNode;
import org.apache.servicecomb.core.filter.ProviderFilter;
import org.apache.servicecomb.swagger.invocation.Response;
import org.springframework.beans.factory.annotation.Autowired;

public class AuthenticationProviderFilter extends AbstractFilter implements ProviderFilter {
  private List<AuthFilter> authFilters;

  @Autowired
  public void setAuthFilters(List<AuthFilter> authFilters) {
    this.authFilters = authFilters;
  }

  @Override
  public int getOrder() {
    // spring security depends on ThreadLocal, this filter should after schedule filter.
    return Filter.PROVIDER_SCHEDULE_FILTER_ORDER + 10;
  }

  @Override
  public String getName() {
    return "authentication";
  }

  @Override
  public CompletableFuture<Response> onFilter(Invocation invocation, FilterNode nextNode) {
    authFilters.forEach(authFilter -> authFilter.doFilter(invocation));
    return nextNode.onFilter(invocation);
  }
}

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

package org.apache.servicecomb.fence.edge;

import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.core.filter.AbstractFilter;
import org.apache.servicecomb.core.filter.EdgeFilter;
import org.apache.servicecomb.core.filter.Filter;
import org.apache.servicecomb.core.filter.FilterNode;
import org.apache.servicecomb.swagger.invocation.Response;
import org.apache.servicecomb.swagger.invocation.exception.CommonExceptionData;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;

import jakarta.ws.rs.core.Response.Status;

public class InternalAccessEdgeFilter extends AbstractFilter implements EdgeFilter {
  @Override
  public int getOrder() {
    return Filter.PROVIDER_SCHEDULE_FILTER_ORDER - 1998;
  }

  @Override
  public String getName() {
    return "internal-access";
  }

  @Override
  public CompletableFuture<Response> onFilter(Invocation invocation, FilterNode nextNode) {
    if (invocation.getOperationMeta().getSwaggerOperation().getTags() != null
        && invocation.getOperationMeta().getSwaggerOperation().getTags().contains("INTERNAL")) {
      return CompletableFuture.failedFuture(
          new InvocationException(Status.FORBIDDEN, new CommonExceptionData("not allowed")));
    }
    return nextNode.onFilter(invocation);
  }
}

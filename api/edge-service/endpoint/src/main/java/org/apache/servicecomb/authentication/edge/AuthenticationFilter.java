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

import org.apache.servicecomb.authentication.util.CommonConstants;
import org.apache.servicecomb.common.rest.filter.HttpServerFilter;
import org.apache.servicecomb.core.Invocation;
import org.apache.servicecomb.foundation.vertx.http.HttpServletRequestEx;
import org.apache.servicecomb.swagger.invocation.Response;

public class AuthenticationFilter implements HttpServerFilter {

  @Override
  public int getOrder() {
    return 0;
  }

  @Override
  public Response afterReceiveRequest(Invocation invocation, HttpServletRequestEx requestEx) {
    String authentication = requestEx.getHeader(CommonConstants.HTTP_HEADER_AUTHORIZATION);
    String type = requestEx.getHeader(CommonConstants.HTTP_HEADER_AUTHORIZATION_TYPE);
    if (authentication != null) {
      String[] tokens = authentication.split(" ");
      if (tokens.length == 2) {
        if (tokens[0].equals(CommonConstants.TOKEN_TYPE_BEARER)) {
          invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION, tokens[1]);
          invocation.addContext(CommonConstants.CONTEXT_HEADER_AUTHORIZATION_TYPE,
              type == null ? CommonConstants.AUTHORIZATION_TYPE_ACCESS_TOKEN : type);
        }
      }
    }
    return null;
  }

}

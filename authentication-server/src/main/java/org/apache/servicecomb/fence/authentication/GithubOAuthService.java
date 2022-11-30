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

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;

import org.springframework.http.MediaType;

import io.swagger.annotations.Api;

//see: https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/
@Path("/login/oauth")
@Api(produces = MediaType.APPLICATION_JSON_VALUE)
public interface GithubOAuthService {
  @POST
  @Path("/access_token")
  public GithubAccessTokenResponse accessToken(@FormParam("client_id") String client_id,
      @FormParam("client_secret") String client_secret,
      @FormParam("code") String code,
      @FormParam("state") String state,
      @FormParam("redirect_uri") String redirect_uri);
}

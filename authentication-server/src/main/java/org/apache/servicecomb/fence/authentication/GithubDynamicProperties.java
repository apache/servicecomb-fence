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

import org.apache.servicecomb.config.inject.InjectProperties;
import org.apache.servicecomb.config.inject.InjectProperty;

@InjectProperties(prefix = "servicecomb.authentication.github")
public class GithubDynamicProperties {
  @InjectProperty(keys = "clientId")
  private String clientId;

  // TODO : support secret encryption
  @InjectProperty(keys = "clientSecret")
  private String clientSecret;

  @InjectProperty(keys = "oauthAuthorizeURL", defaultValue = "https://github.com/login/oauth/authorize")
  private String oauthAuthorizeURL;

  public String getClientId() {
    return clientId;
  }

  public void setClientId(String clientId) {
    this.clientId = clientId;
  }

  public String getClientSecret() {
    return clientSecret;
  }

  public void setClientSecret(String clientSecret) {
    this.clientSecret = clientSecret;
  }

  public String getOauthAuthorizeURL() {
    return oauthAuthorizeURL;
  }

  public void setOauthAuthorizeURL(String oauthAuthorizeURL) {
    this.oauthAuthorizeURL = oauthAuthorizeURL;
  }


}

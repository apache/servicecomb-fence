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

package org.apache.servicecomb.authentication.token;

import java.util.Map;
import java.util.UUID;

public class SessionTokenImpl implements SessionToken {
  private String value;

  private long issueAt;

  private String username;

  private TokenDynamicProperties config;

  public SessionTokenImpl(String username) {
    this.value = UUID.randomUUID().toString();
    this.issueAt = System.currentTimeMillis();
    this.username = username;
    this.config = TokenDynamicPropertiesManager.getTokenConfiguration(username);
  }

  @Override
  public long getIssueAt() {
    return this.issueAt;
  }

  @Override
  public long getExpiresIn() {
    return this.config.expiresIn;
  }

  @Override
  public long getNotBefore() {
    return this.config.notBefore;
  }

  @Override
  public String getValue() {
    return this.value;
  }

  @Override
  public Map<String, Object> getAdditionalInformation() {
    // TODO additional information is not used now
    return null;
  }

  @Override
  public String username() {
    return this.username;
  }
}

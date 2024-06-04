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

package org.apache.servicecomb.fence.token;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class SessionToken implements Token {
  private static final long serialVersionUID = -7783398248936167939L;

  private String value;

  private long issueAt;
  
  private long expiresIn;
  
  private long notBefore;

  private String username;

  private Map<String, Object> additionalInformation;

  public SessionToken() {
    
  }
  
  public SessionToken(String username) {
    this.value = UUID.randomUUID().toString();
    this.issueAt = System.currentTimeMillis();
    this.username = username;
    TokenDynamicProperties config = TokenDynamicPropertiesManager.getTokenConfiguration(username);
    this.expiresIn = config.expiresIn;
    this.notBefore = config.notBefore;
  }

  @Override
  public long getIssueAt() {
    return this.issueAt;
  }

  @Override
  public long getExpiresIn() {
    return this.expiresIn;
  }

  @Override
  public long getNotBefore() {
    return this.notBefore;
  }

  @Override
  public String getValue() {
    return this.value;
  }

  @Override
  public Map<String, Object> getAdditionalInformation() {
    return additionalInformation;
  }

  @Override
  public String getUsername() {
    return this.username;
  }

  @Override
  public void addAdditionalInformation(String key, Object value) {
    if (additionalInformation == null) {
      additionalInformation = new HashMap<>();
    }
    additionalInformation.put(key, value);
  }
}

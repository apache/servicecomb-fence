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

public class SessionIDToken implements Token {
  private String value;

  private long issueAt;

  // in seconds
  private long expiration;

  private String username;

  public SessionIDToken(String username) {
    this.value = UUID.randomUUID().toString();
    this.issueAt = System.currentTimeMillis();
    // TODO add a configuration
    this.expiration = 600;
    this.username = username;
  }

  @Override
  public boolean isExpired() {
    return System.currentTimeMillis() - this.issueAt > this.expiration * 1000;
  }

  @Override
  public long getIssueAt() {
    return this.issueAt;
  }

  @Override
  public long getExpiration() {
    return this.expiration;
  }

  @Override
  public long getNotBefore() {
    // TODO add a configuration
    return 0;
  }

  @Override
  public String getValue() {
    return this.value;
  }

  @Override
  public Map<String, Object> getAdditionalInformation() {
    // TODO add a configuration
    return null;
  }

  public String username() {
    return this.username;
  }
}

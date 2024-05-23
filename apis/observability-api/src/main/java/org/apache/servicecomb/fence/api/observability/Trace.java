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
package org.apache.servicecomb.fence.api.observability;

import java.util.Map;

public class Trace {
  private String traceId;

  private String id;

  private String parentId;

  private String kind;

  private String name;

  private long timestamp;

  private long duration;

  private Endpoint localEndpoint;

  private Map<String, String> tags;

  private boolean shared;

  public boolean isShared() {
    return shared;
  }

  public Trace setShared(boolean shared) {
    this.shared = shared;
    return this;
  }

  public String getTraceId() {
    return traceId;
  }

  public Trace setTraceId(String traceId) {
    this.traceId = traceId;
    return this;
  }

  public String getId() {
    return id;
  }

  public Trace setId(String id) {
    this.id = id;
    return this;
  }

  public String getKind() {
    return kind;
  }

  public Trace setKind(String kind) {
    this.kind = kind;
    return this;
  }

  public String getName() {
    return name;
  }

  public Trace setName(String name) {
    this.name = name;
    return this;
  }

  public long getTimestamp() {
    return timestamp;
  }

  public Trace setTimestamp(long timestamp) {
    this.timestamp = timestamp;
    return this;
  }

  public long getDuration() {
    return duration;
  }

  public Trace setDuration(long duration) {
    this.duration = duration;
    return this;
  }

  public String getParentId() {
    return parentId;
  }

  public Trace setParentId(String parentId) {
    this.parentId = parentId;
    return this;
  }

  public Endpoint getLocalEndpoint() {
    return localEndpoint;
  }

  public Trace setLocalEndpoint(Endpoint localEndpoint) {
    this.localEndpoint = localEndpoint;
    return this;
  }

  public Map<String, String> getTags() {
    return tags;
  }

  public Trace setTags(Map<String, String> tags) {
    this.tags = tags;
    return this;
  }
}

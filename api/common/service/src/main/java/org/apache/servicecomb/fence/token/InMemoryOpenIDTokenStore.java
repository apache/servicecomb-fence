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

import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

/**
 * In memory store, only used for testing or samples only. DO NOT use it in product.
 */
public class InMemoryOpenIDTokenStore extends AbstractOpenIDTokenStore {
  private static final Map<String, OpenIDToken> TOKENS = new ConcurrentHashMap<>();

  private static final Map<String, OpenIDToken> TOKENS_BY_REFRESH_TOKEN_VALUE = new ConcurrentHashMap<>();

  private static final Map<String, OpenIDToken> TOKENS_BY_ID_TOKEN_VALUE = new ConcurrentHashMap<>();

  @Override
  public CompletableFuture<OpenIDToken> readTokenByAccessToken(String value) {
    CompletableFuture<OpenIDToken> result = new CompletableFuture<>();
    result.complete(TOKENS.get(value));
    return result;
  }

  @Override
  public OpenIDToken readTokenByRefreshToken(String refreshTokenValue) {
    return TOKENS_BY_REFRESH_TOKEN_VALUE.get(refreshTokenValue);
  }

  @Override
  public void saveToken(OpenIDToken token) {
    TOKENS.put(token.getValue(), token);
    TOKENS_BY_REFRESH_TOKEN_VALUE.put(token.getRefreshToken().getValue(), token);
    TOKENS_BY_ID_TOKEN_VALUE.put(token.getIdToken().getValue(), token);
  }
}

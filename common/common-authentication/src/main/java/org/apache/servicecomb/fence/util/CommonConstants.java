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

package org.apache.servicecomb.fence.util;

public final class CommonConstants {
  public static final String ACCESS_CONTROL_INTERNAL = "INTERNAL";

  public static final String HTTP_HEADER_AUTHORIZATION = "Authorization";

  public static final String HTTP_HEADER_AUTHORIZATION_TYPE = "Authorization-TYPE";

  public static final String CONTEXT_HEADER_AUTHORIZATION = "Authorization";

  public static final String CONTEXT_HEADER_AUTHORIZATION_TYPE = "Authorization-TYPE";

  public static final String AUTHORIZATION_TYPE_ID_TOKEN = "ID_TOKEN";

  public static final String AUTHORIZATION_TYPE_ACCESS_TOKEN = "ACCESS_TOKEN";

  public static final String CONTEXT_HEADER_CLAIMS = "Claims";

  public static final String TOKEN_TYPE_BEARER = "Bearer";

  public static final int BEAN_DEFAULT_ORDER = 100;

  public static final String BEAN_AUTH_EDGE_TOKEN_RESPONSE_PROCESSOR = "edgeTokenResponseProcessor";

  public static final String BEAN_AUTH_SIGNER = "authSigner";

  public static final String BEAN_AUTH_SIGNATURE_VERIFIER = "authSignatureVerifier";

  public static final String BEAN_AUTH_PASSWORD_ENCODER = "authPasswordEncoder";

  public static final String BEAN_AUTH_ACCESS_TOKEN_STORE = "authAccessTokenStore";

  public static final String BEAN_AUTH_REFRESH_TOKEN_STORE = "authRefreshTokenStore";

  public static final String BEAN_AUTH_ID_TOKEN_STORE = "authIDTokenStore";

  public static final String BEAN_AUTH_OPEN_ID_TOKEN_STORE = "authOpenIDTokenStore";

  public static final String BEAN_AUTH_USER_DETAILS_SERVICE = "authUserDetailsService";
}

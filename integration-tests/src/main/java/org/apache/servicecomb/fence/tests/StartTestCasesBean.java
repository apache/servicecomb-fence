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

package org.apache.servicecomb.fence.tests;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
public class StartTestCasesBean {
  private static final Logger LOGGER = LoggerFactory.getLogger(StartTestCasesBean.class);

  @Autowired
  private List<TestCase> tests;

  @EventListener(ApplicationReadyEvent.class)
  public String start() {
    tests.forEach(test -> {
      try {
        test.run();
      } catch (Throwable e) {
        LOGGER.error("", e);
        TestMgr.failed(e.getMessage(), e);
      }
    });

    TestMgr.summary();

    List<Throwable> errors = TestMgr.errors();
    StringBuilder sb = new StringBuilder();
    if (TestMgr.isSuccess()) {
      sb.append(TestMgr.successMessage());
    } else {
      sb.append("Failed count : " + errors.size());
      sb.append("\n");
      errors.forEach(t -> sb.append(t.getMessage() + "\n"));
    }
    TestMgr.reset();
    return sb.toString();
  }
}

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

function loginAction() {
     var username = document.getElementById("username").value;
     var password = document.getElementById("paasword").value;
     var formData = {};
     formData.username = username;
     formData.password = password;
     formData.grant_type = "password";

     $.ajax({
        type: 'POST',
        url: "/v1/token",
        data: formData,
        success: function (data) {
            console.log(JSON.stringify(data));
            window.localStorage.setItem("token", JSON.stringify(data));
            window.location = "/ui/operation.html";
        },
        error: function(data) {
            console.log(JSON.stringify(data));
            var error = document.getElementById("error");
            error.textContent="Login failed";
            error.hidden=false;
        },
        async: true
    });
}


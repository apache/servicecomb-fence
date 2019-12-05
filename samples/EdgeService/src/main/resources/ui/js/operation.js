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

function everyoneSayHello() {
     $.ajax({
        type: 'POST',
        url: "/api/resource-server/v1/auth/handler/everyoneSayHello?name=Hi",
        headers: {
          "Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("token")).id_token,
          "Authorization-TYPE": "ID_TOKEN"
        },
        success: function (data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Successfully";
            error.hidden=false;
        },
        error: function(data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Failed";
            error.hidden=false;
        },
        async: true
    });
}

function adminSayHello() {
     $.ajax({
        type: 'POST',
        url: "/api/resource-server/v1/auth/handler/adminSayHello?name=Hi",
        headers: {
          "Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("token")).id_token,
          "Authorization-TYPE": "ID_TOKEN"
        },
        success: function (data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Successfully";
            error.hidden=false;
        },
        error: function(data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Failed";
            error.hidden=false;
        },
        async: true
    });
}

function guestOrAdminSayHello() {
     $.ajax({
        type: 'POST',
        url: "/api/resource-server/v1/auth/handler/guestOrAdminSayHello?name=Hi",
        headers: {
          "Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("token")).id_token,
          "Authorization-TYPE": "ID_TOKEN"
        },
        success: function (data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Successfully";
            error.hidden=false;
        },
        error: function(data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Failed";
            error.hidden=false;
        },
        async: true
    });
}

function guestSayHello() {
     $.ajax({
        type: 'POST',
        url: "/api/resource-server/v1/auth/handler/guestSayHello?name=Hi",
        headers: {
          "Authorization": "Bearer " + JSON.parse(window.localStorage.getItem("token")).id_token,
          "Authorization-TYPE": "ID_TOKEN"
        },
        success: function (data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Successfully";
            error.hidden=false;
        },
        error: function(data) {
            console.log(data);
            var error = document.getElementById("error");
            error.textContent="Failed";
            error.hidden=false;
        },
        async: true
    });
}
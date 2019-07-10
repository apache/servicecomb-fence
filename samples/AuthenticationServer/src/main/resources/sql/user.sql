#
## ---------------------------------------------------------------------------
## Licensed to the Apache Software Foundation (ASF) under one or more
## contributor license agreements.  See the NOTICE file distributed with
## this work for additional information regarding copyright ownership.
## The ASF licenses this file to You under the Apache License, Version 2.0
## (the "License"); you may not use this file except in compliance with
## the License.  You may obtain a copy of the License at
##
##      http://www.apache.org/licenses/LICENSE-2.0
##
## Unless required by applicable law or agreed to in writing, software
## distributed under the License is distributed on an "AS IS" BASIS,
## WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
## See the License for the specific language governing permissions and
## limitations under the License.
## ---------------------------------------------------------------------------

CREATE DATABASE IF NOT EXISTS authentication_server_db;

USE authentication_server_db;

DROP TABLE IF EXISTS T_USERS;

CREATE TABLE `T_USERS` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `USER_NAME` VARCHAR(64) NOT NULL,
  `PASSWORD` VARCHAR(256) NOT NULL,
  `ACCOUNT_NON_EXPIRED` TINYINT(1) NOT NULL,
  `ACCOUNT_NON_LOCKED` TINYINT(1) NOT NULL,
  `CREDENTIALS_NON_EXPIRED` TINYINT(1) NOT NULL,
  `ENABLED` TINYINT(1) NOT NULL,
  PRIMARY KEY (`ID`)
);

/* PBKDF encrypted password for changeMyPassword , please note to change it */
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("admin", "14761713125f5a1880e4b8f3c735e5afc9a550757225c45bb6d3d428ce05ca04962dadf774643a5f", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("guest", "aec37aebc3ee961b8d615192025a03b24180e18b87bb690e038717d73acfa7b650a6b31eb8887d43", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("guestExpiresQuickly", "295cbb2c18c7d3bcb164840c8e16d41a1cc21246054d8f68f5e95f30c37a06fc3a429f832dc1c6dd", true, true, true, true);

/* empty password user can not login directly */
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("github:anonymous", "", true, true, true, true);
INSERT INTO T_USERS(USER_NAME, PASSWORD, ACCOUNT_NON_EXPIRED, ACCOUNT_NON_LOCKED, CREDENTIALS_NON_EXPIRED, ENABLED)
  VALUES("github:liubao68", "", true, true, true, true);

DROP TABLE IF EXISTS T_ROLES;

CREATE TABLE `T_ROLES` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `ROLE_NAME` VARCHAR(64) NOT NULL,
  `USER_NAME` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`ID`)
);

INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("ADMIN", "admin");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "guest");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "guestExpiresQuickly");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("GUEST", "github:anonymous");
INSERT INTO T_ROLES(ROLE_NAME, USER_NAME) 
  VALUES("ADMIN", "github:liubao68");

DROP TABLE IF EXISTS T_TOKENS;

CREATE TABLE `T_TOKENS` (
  `ID` INTEGER(8) NOT NULL AUTO_INCREMENT,
  `ACCESS_TOKEN_VALUE` VARCHAR(256) NOT NULL,
  `REFRESH_TOKEN_VALUE` VARCHAR(256) NOT NULL,
  `TOKEN` TEXT NOT NULL,
  PRIMARY KEY (`ID`)
);

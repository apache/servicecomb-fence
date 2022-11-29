# Fence | [中文](README_ZH.md) [![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![Gitter](https://img.shields.io/badge/ServiceComb-Gitter-ff69b4.svg)](https://gitter.im/ServiceCombUsers/Lobby)

This project is servicecomb-java-chassis security support. The main architecture is based on [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) and [OpenID Connect](https://openid.net/connect/). And provides APIs for developers based on [Spring Security](https://spring.io/projects/spring-security). Please see [developers guide](docs/zh_CN/developersGuide.md) for details.

## Authentication diagram

![](docs/authentication.png)


## Authorization diagram

![](docs/authorization.png)

## Project description

This project contains authentication-server, resource server and edge service. 

* Prepare

Authentication Server uses MySql database. Install database first, and initialize it by executing authentication-server\src\main\resources\sql\user.sql .

* Build and run

```
build_and_run.bat
```

Can open this file with a text editor to check what it is done.

* Demo web pages

Using admin/changeMyPassword login to the demo pages, and try operations. 
```
http://localhost:9090/ui/login.html
```

* Run tests

After services are started, try
```
http://localhost:9093/v1/test/start
```

This test will token several seconds. See AuthenticationTestCase for testing details.

## Contact Us
* [issues](https://issues.apache.org/jira/browse/SCB)
* mailing list: [subscribe](mailto:dev-subscribe@servicecomb.apache.org) [view](https://lists.apache.org/list.html?dev@servicecomb.apache.org)

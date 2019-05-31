# Fence | [中文](README_ZH.md) [![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![Gitter](https://img.shields.io/badge/ServiceComb-Gitter-ff69b4.svg)](https://gitter.im/ServiceCombUsers/Lobby)

This project is servicecomb-java-chassis security support. The main architecture is based on [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) and [OpenID Connect](https://openid.net/connect/). And provides APIs for developers based on [Spring Security](https://spring.io/projects/spring-security). Please see [developers guide](docs/zh_CN/developersGuide.md) for details.

## Project description

This project contains two folders api and samples. Api folder contains components used in Authentication Server, Edge Service and Resource Server. And samples folder gives a working example showing how to use these apis. 

* Build and run

```
cd samples
mvn clean install
```

After build, the Authentication Server, Resource Server, Edge Service and Testing Client runnable jar are generated, start and run the four services.

* Run tests

After services are started, try
```
http://localhost:9093/v1/test/start
```

see AuthenticationTestCase for testing details.

## Contact Us
* [issues](https://issues.apache.org/jira/browse/SCB)
* [gitter](https://gitter.im/ServiceCombUsers/Lobby)
* mailing list: [subscribe](mailto:dev-subscribe@servicecomb.apache.org) [view](https://lists.apache.org/list.html?dev@servicecomb.apache.org)

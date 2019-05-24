# English

This project is servicecomb-java-chassis security support. The main architecture is based on [The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) and [OpenID Connect](https://openid.net/connect/). And provides APIs for developers based on [Spring Security](https://spring.io/projects/spring-security). Please see [developers guide](docs/en_US/developersGuide.md) for details.

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


# 中文
本项目为servicecomb-java-chassis提供认证鉴权支持。鉴权实现的主要框架参考了[The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) 和 [OpenID Connect](https://openid.net/connect/)。项目参考[Spring Security](https://spring.io/projects/spring-security)给开发者提供了接口。请参考[开发指南](docs/zh_CN/developersGuide.md)获取详细信息。

## 项目说明

项目包含了api和samples两个目录。其中api目录主要提供给Authentication Server, Edge Service and Resource Server使用的api。 samples目录是基于上诉api提供的一个开发示例。

* 编译和运行


```
cd samples
mvn clean install
```

编译完成后，会生成Authentication Server, Resource Server, Edge Service and Testing Client可执行jar包，运行这四个服务。

* 运行测试用例

当四个服务都运行起来后，访问：

```
http://localhost:9093/v1/test/start
```

可以通过查看AuthenticationTestCase了解测试用例的详情。


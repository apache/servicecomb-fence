# Fence | [English](README.md) [![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg)](https://www.apache.org/licenses/LICENSE-2.0.html) [![Gitter](https://img.shields.io/badge/ServiceComb-Gitter-ff69b4.svg)](https://gitter.im/ServiceCombUsers/Lobby)

本项目为servicecomb-java-chassis提供认证鉴权支持。鉴权实现的主要框架参考了[The OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749) 和 [OpenID Connect](https://openid.net/connect/)。项目参考[Spring Security](https://spring.io/projects/spring-security)给开发者提供了接口。请参考[开发指南](docs/zh_CN/developersGuide.md)获取详细信息。

## 认证流程图

![](docs/authentication.png)


## 鉴权流程图

![](docs/authorization.png)

## 项目说明

项目包含了authentication-server，resource-server和edge-service 3个子项目，分工协作完成使用微服务架构的认证鉴权方案。

* 准备

Authentication Server使用了MySQL数据库，需要安装数据库，并执行authentication-server\src\main\resources\sql\user.sql脚本初始化数据库。

* 编译和运行

```
build_and_run.bat
```

可以使用编辑器打开文件查询构建详情。

* 使用演示界面

进入页面，使用admin/changeMyPassword登录
```
http://localhost:9090/ui/login.html
```

* 运行测试用例

当四个服务都运行起来后，访问：

```
http://localhost:9093/v1/test/start
```

测试用例会执行十来秒钟，可以通过查看AuthenticationTestCase了解测试用例的详情。

## 联系我们
* [提交issues](https://issues.apache.org/jira/browse/SCB)
* 邮件列表: [订阅](mailto:dev-subscribe@servicecomb.apache.org) [浏览](https://lists.apache.org/list.html?dev@servicecomb.apache.org)

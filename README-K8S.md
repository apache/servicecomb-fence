# Apache ServiceComb容器化改造
## 一、项目简介
### 1、Apache ServiceComb介绍
[官网主页](https://servicecomb.apache.org/)：https://servicecomb.apache.org/
Apache ServiceComb Java Chassis 给开发者提供一个快速构建微服务的JAVA SDK。它包含如下特性：
* 基于Open API的契约优先(API First)开发模式，满足开发过程可管理、开发规范可验证要求。
* 多种开发风格，REST(JAX-RS、Spring MVC）和RPC等，高效支持遗留系统迁移和新系统开发场景。
* 多种通信协议, HTTP over Vert.x、Http Over Servlet、Highway等，满足不同场景对于性能、韧性的需求。
* 统一一致的服务提供者、服务消费者处理链，易于扩展新功能。
* 提供服务发现、配置管理、熔断、限流、灰度发布等开箱即用的服务治理能力。
[源码地址](https://github.com/apache/servicecomb-java-chassis)：https://github.com/apache/servicecomb-java-chassis

### 2、servicecomb-fence介绍
servicecomb-fence基于servicecomb-java-chassis提供认证鉴权支持。鉴权实现的主要框架参考了The OAuth 2.0 Authorization Framework 和 OpenID Connect。项目参考Spring Security给开发者提供了接口。请参考开发指南获取详细信息。
本文主要介绍如何改造采用华为云CodeArts、OBS、SWR、CCE、ELB、VPC等技术来实现容器改造
[servicecomb-fence源码地址](https://github.com/apache/servicecomb-java-chassis)：https://github.com/apache/servicecomb-fence
改造后servicecomb工程结构如下：
- servicecomb-fence
    - admin-service 管理页面后端服务
    - admin-website 管理页面前端服务
    - authentication-server 微服鉴权服务
    - edge-service 微服网关服务
    - resource-server 资源服务
    - zookeeper-server zk服务注册和配置中心
    - mysql-server 数据库服务

## 二、容器化改造

### 第一步：改造zookeeper-server
1. zookeeper作为微服核心服务，在启动服务中需要首先启动，从镜像库下载，然后打包上传至华为云SWR容器镜像服务中心
    ```shell
        docker pull zookeeper:3.9.2
        docker tag  zookeeper:3.9.2 swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2
        docker push swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2
    ```
2. 编写编写zookeeper-deploy.yaml
3. 编写zookeeper-server.yaml

### 第二步：改造mysql-server
1. mysql作为auth模块鉴权信息存储数据库，需要先行部署,从镜像库下载，然后打包上传至华为云SWR容器镜像服务中心
    ```shell
        docker pull mysql:5.7
        docker tag  mysql:5.7 swr.cn-north-4.myhuaweicloud.com/wmwei/mysql:5.7
        docker push swr.cn-north-4.myhuaweicloud.com/wmwei/mysql:5.7
    ```
2. 编写mysql-deploy.yaml
3. 编写mysql-server.yaml

### 第三步：改造edge-service
1. 编写Dockerfile
2. 编写edge-deploy.yaml
3. 编写edge-server.yaml

### 第四步：同理改造其他微服务，authentication-server，resource-server,admin-service,admin-website
1. 编写Dockerfile
2. 编写XXX-deploy.yaml
3. 编写XXX-server.yaml

## 三、CodeArts平台创建和配置项目
如果没有开通，可以先开通，目前免费使用
### 第一步：创建项目
### 第二步：代码--代码托管--配置拉取githup代码
### 第三步：持续交付--编译构建
1. 创建任务一：上传yaml文件至华为云OBS对象存储服务,参考配置如下图：
![upload_yaml_to_obs](upload_yaml_to_obs.png)
2. 任务二、上传镜像资源到SWR华为云容器镜像服务，参考配置如下图：
![image_to_swr.png](image_to_swr.png)
### 第四步：持续交付--部署
创建部署任务之前，要先执行第三步构建任务
1. 创建部署mysql任务，参考配置如下图：
![deploy_mysql.png](deploy_mysql.png)
2. 其他服务部署配置参考mysql任务创建

所有服务启动之后，访问 http://edage-server-ELB-IP/ui/admin/ 网关登录地址
## 四、注意事项
需要购买的服务有
1. CodeArts
2. 云容器引擎CCE
3. OBS对象存储
4. SWR容器镜像
5. ELB负载均衡

* [demo地址](https://github.com/weiwenman/servicecomb-fence)：https://github.com/weiwenman/servicecomb-fence
* [博客地址](https://bbs.huaweicloud.com/blogs/438885)：https://bbs.huaweicloud.com/blogs/438885
* demo运行结果关键截图
![result](./img/jooq-result.png)
* demo运行环境资源清单

| 产品名称         | 产品类型 | 数据库引擎版本  | 内核引擎版本  | 实例类型 | 部署形态 | 备注  |
|--------------|------|----------|---------|------|------|-----|
| 云数据库 GaussDB | 基础版  | V2.0-8.* | 505.1.* | 集中式  | 1主2备 | 推荐  |

<br />

| 产品名称      | 集群类型             | 集群版本  | 集群规模 | 备注  |
|-----------|------------------|-------|------|-----|
| 云容器引擎 CCE | CCE Standard 集群  | V1.29 | 50   | 推荐  |

<br />

| 产品名称   | CPU架构 | 	实例类型     | 公共镜像                 | 镜像版本                                         | 备注  |
|--------|-------|-----------|----------------------|----------------------------------------------|-----|
| 弹性云服务器 | 鲲鹏计算  | 鲲鹏通用计算增强型 | Huawei Cloud EulerOS | Huawei Cloud EulerOS 2.0 标准版 64位 ARM版(10GiB) | 推荐  |

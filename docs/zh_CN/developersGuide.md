# servicecomb-fence 开发指南

开发者可以使用 servicecomb-fence 给 servicecomb-java-chassis 微服务项目增加基于 OpenID Connect 的认证鉴权能力。

## 认证鉴权流程介绍

### 密码模式

  * Client 输入用户名密码向 Authentication Server 请求 Token。

```
** HTTP Request **

POST http://localhost:9090/api/authentication-server/v1/oauth/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded

grant_type=password&username=admin&password=changeMyPassword
```

  * Authentication Server 发送 Token 给 Client 。

  * Client 携带 Token 请求 Resource Server 。

```
** HTTP Request **

POST http://localhost:9090/api/resource-server/v1/auth/handler/adminSayHello?name=Hi HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer czZCaGRSa3F0MzpnWDFmQmF0M2JW
```

  * Resource Server 返回对应的资源给 Client 。 

## 开发 Authentication Server

Authentication Server 主要提供认证和授权等接口。  

* 配置依赖

项目中引入

```
    <dependency>
      <groupId>org.apache.servicecomb.authentication</groupId>
      <artifactId>authentication-server-api-endpoint</artifactId>
    </dependency>
```

* 配置

Authentication Server 需要配置 PasswordEncoder、Signer、SignerVerifier、UserDetailsService 等。这些对象和 Spring Security的概念一样。
```
@Configuration
public class AuthenticationConfiguration {
  @Autowired
  @Qualifier("authPasswordEncoder")
  private PasswordEncoder passwordEncoder;

  @Bean(name = "authPasswordEncoder")
  public PasswordEncoder authPasswordEncoder() {
    return new Pbkdf2PasswordEncoder();
  }

  @Bean(name = "authSigner")
  public Signer authSigner() {
    return authSignerVerifier();
  }
  
  @Bean(name = "authSignerVerifier")
  public SignerVerifier authSignerVerifier() {
    return new MacSigner("Please change this key.");
  }

  @Bean(name = "authUserDetailsService")
  public UserDetailsService authUserDetailsService() {
    InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
    UserDetails uAdmin = new User("admin", passwordEncoder.encode("changeMyPassword"),
        Arrays.asList(new SimpleGrantedAuthority("ADMIN")));
    UserDetails uGuest = new User("guest", passwordEncoder.encode("changeMyPassword"),
        Arrays.asList(new SimpleGrantedAuthority("GUEST")));
    manager.createUser(uAdmin);
    manager.createUser(uGuest);
    return manager;
  }
}
```

* UserDetailsService

获取用户详情，包括用户名称、角色等信息。包括 InMemoryUserDetailsManager 、 JdbcUserDetailsManager 等实现。示例项目使用了InMemoryUserDetailsManager ， 它不会持久化， 正式项目需要使用 JdbcUserDetailsManager 等。

* Signer 和  SignatureVerifier 

生成 Token 和对 Token 进行校验。Singer 和  SignatureVerifier 是配套使用的， 在 Authentication Server ， 生成 Token 的时候，需要使用 Singer 。 验证 Token 的有效性 （比如查询 userDetails 等场景）， 需要使用  SignatureVerifier 。 通常有两种方式进行签名和校验， 一种是基于对称秘钥的机制，比如MacSigner，即是 Singer， 也是 SignatureVerifier （SignerVerifier）; 一种是基于非对称秘钥的机制， 比如 RsaSigner 和  RsaVerifier , 生成 Token 和校验 Token 的秘钥是不同的。

* PasswordEncoder 

从 UserDetailsService 校验用户密码的时候需要使用。 开发者需要在加密性能和保密程度方面选择合适的算法。 常用的有 Pbkdf2PasswordEncoder , 它可以设置迭代次数，能够更好的保护密码不被暴力破解。 

## 开发 Resource Server

Resource Server 对 Client 的访问进行认证， 并进行权限控制。 

* 配置依赖

项目中引入

```
    <dependency>
      <groupId>org.apache.servicecomb.authentication</groupId>
      <artifactId>authentication-resource-api-endpoint</artifactId>
    </dependency>
```

* 配置

Resource Server 需要配置 SignatureVerifier 等， 对用户会话进行认证。 
```
@Configuration
public class AuthenticationConfiguration {
  @Bean(name = "authSignatureVerifier")
  public SignerVerifier authSignatureVerifier() {
    return new MacSigner("Please change this key.");
  }
}
```

* 权限配置

fence 提供了两种方式进行权限配置。 一种是基于配置文件的，一种是基于 Annotation 。

基于文件的配置, 在 microservice.yaml 中可以配置每个方法的访问权限。 

```
servicecomb:
  authencation:
    access:
      needAuth: true
      roles:
        HandlerAuthEndpoint:
          adminSayHello: ADMIN
          guestSayHello: GUEST
          guestOrAdminSayHello: ADMIN,GUEST
          # everyoneSayHello: all can
```

还可以统一配置Schema

```
servicecomb:
  authencation:
    access:
      needAuth: true
      roles:
        HandlerAuthEndpoint: ADMIN
```

或者所有

```
servicecomb:
  authencation:
    access:
      needAuth: true
      roles: ADMIN
```

基于 Annotation ， 可以使用 PreAuthorize 标签

```
@PreAuthorize("hasRole('ADMIN')")
```

Annotation 支持默认没有启用， 可以通过 EnableGlobalMethodSecurity 标签启用。 

```
@Configuration
@EnableGlobalMethodSecurity(
    prePostEnabled = true)
public class MethodSecurityConfiguration extends GlobalMethodSecurityConfiguration {
  @Override
  protected MethodSecurityExpressionHandler createExpressionHandler() {
    DefaultMethodSecurityExpressionHandler h = (DefaultMethodSecurityExpressionHandler) super.createExpressionHandler();
    h.setDefaultRolePrefix("");
    return h;
  }
}
```


## 开发 Edge Service

Edge Service 是微服务接入层。 在[单体应用微服务改造](https://bbs.huaweicloud.com/blogs/17ad483f325f11e9bd5a7ca23e93a891)中介绍了基于网关的弹性架构， 这种架构对于微服务持续演进具有重要意义， 因此建议开发者都按照这个[基础架构](https://bbs.huaweicloud.com/blogs/8bb2c3b8366c11e9bd5a7ca23e93a891)搭建微服务。接入层在认证鉴权的功能包括透传 Authentication Server的请求， 将HTTP消息转化为ServiceComb-java-chassis友好的消息格式，对Token进行认证，控制内部接口和外部接口的隔离等功能。 

* 配置依赖

项目中引入

```
    <dependency>
      <groupId>org.apache.servicecomb.authentication</groupId>
      <artifactId>authentication-edge-api-endpoint</artifactId>
    </dependency>
```

* 配置

Edge Service 需要配置 SignatureVerifier 等， 对用户会话进行认证。 
```

@Configuration
public class AuthenticationConfiguration {
  @Bean(name = "authSignatureVerifier")
  public SignerVerifier authSignatureVerifier() {
    return new MacSigner("Please change this key.");
  }
}

```

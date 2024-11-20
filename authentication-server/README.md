
# docker build file
`
    docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/authentication-server:0.0.1 .
`

# docker run
`
    docker run -d --name authentication-server -p 9090:9090 -e "DB_PASSWORD=###" \
    e "ZK_SERVER=172.17.0.4:2181" swr.cn-north-4.myhuaweicloud.com/wmwei/authentication-server:0.0.1
`

## docker run env arg
`
    ARG ZK_SERVER zk服务器IP地址和端口号
    ARG DB_URL  数据库url
    ARG DB_USERNAME 用户名称
    ARG DB_PASSWORD 账户密码
    ARG DB_DRIVER 驱动类
    ARG APP_PORT 应用对外暴露端口号
`
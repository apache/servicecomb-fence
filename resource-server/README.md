
# docker build file
`
    docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/resource-server:0.0.1 .
`

# docker run
`
    docker run -d --name resource-server -p 9092:9092 -e "ZK_SERVER=172.17.0.4:2181" swr.cn-north-4.myhuaweicloud.com/wmwei/resource-server:0.0.1
`

## env arg 环境变量信息
`
    ARG ZK_SERVER zk服务器IP地址和端口号
    ARG APP_PORT 应用对外暴露端口号
`
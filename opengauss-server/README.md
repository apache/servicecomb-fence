
# docker pull file
`
    docker pull opengauss/opengauss:3.1.0
    docker tag  opengauss/opengauss:3.1.0 swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0 
    docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0 
`

# docker run
`
    docker run -d --name opengauss-server -p 5432:5432 -e "GS_PASSWORD=Postgres@123" swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0
`

## 默认 数据库信息 
`
    gsql -v ON_ERROR_STOP=1 --username opengauss --password Postgres@123 --dbname postgres --set db=opengauss --set passwd=Postgres@123 --set passwd=Postgres@123
`


# docker pull file
`
    docker pull zookeeper:3.9.2
    docker tag  zookeeper:3.9.2 swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2 
`

# docker run
`
    docker run -d --name zookeeper-server -p 2181:2181 swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2
`

#!/bin/bash

docker run --name opengauss-server \
-p 5432:5432 \
--restart=always \
-e='GS_PASSWORD=Postgres@123' \
-d swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0
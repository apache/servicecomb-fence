#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy opengauss,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc opengauss
kubectl delete deploy opengauss
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/opengauss:3.1.0 .
kubectl apply -f k8s/opengauss-conf.yaml
kubectl apply -f k8s/opengauss-deploy.yaml
kubectl apply -f k8s/opengauss-server.yaml
echo "deploy opengauss end"
cd - || exit 0

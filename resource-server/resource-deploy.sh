#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy resource,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc resource
kubectl delete deploy resource
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/resource-server:0.0.1
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/resource-server:0.0.1 .
kubectl apply -f k8s/resource-deploy.yaml
kubectl apply -f k8s/resource-server.yaml
echo "deploy resource end"
cd - || exit 0

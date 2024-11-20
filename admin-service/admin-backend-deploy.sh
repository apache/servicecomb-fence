#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy admin-backend,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc admin-backend
kubectl delete deploy admin-backend
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/admin-service:0.0.1
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/admin-service:0.0.1 .
kubectl apply -f k8s/admin-backend-deploy.yaml
kubectl apply -f k8s/admin-backend-server.yaml
echo "deploy admin-backend end"
cd - || exit 0

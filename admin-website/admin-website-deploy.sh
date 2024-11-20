#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy admin-website,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc admin-web
kubectl delete deploy admin-web
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/admin-website:0.0.1
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/admin-website:0.0.1 .
kubectl apply -f k8s/admin-web-deploy.yaml
kubectl apply -f k8s/admin-web-server.yaml
echo "deploy admin-website end"
cd - || exit 0

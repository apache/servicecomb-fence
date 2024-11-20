#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy authentication,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc authentication
kubectl delete deploy authentication
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/authentication-server:0.0.1
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/authentication-server:0.0.1 .
kubectl apply -f k8s/authentication-deploy.yaml
kubectl apply -f k8s/authentication-server.yaml
echo "deploy authentication end"
cd - || exit

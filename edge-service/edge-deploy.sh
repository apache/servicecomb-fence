#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy edge,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc edge
kubectl delete deploy edge
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/edge-service:0.0.1
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/edge-service:0.0.1 .
kubectl apply -f k8s/edge-deploy.yaml
kubectl apply -f k8s/edge-server.yaml
echo "deploy edge end"
cd - || exit 0

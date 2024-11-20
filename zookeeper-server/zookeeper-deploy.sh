#!/bin/bash
BASE_PATH=$(dirname "$0")
echo "begin deploy zookeeper,path=${BASE_PATH}"
cd "$BASE_PATH" || exit 1
kubectl delete svc zookeeper
kubectl delete deploy zookeeper
sleep 20
docker rmi swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2
docker build -t swr.cn-north-4.myhuaweicloud.com/wmwei/zookeeper:3.9.2 .
kubectl apply -f k8s/zookeeper-conf.yaml
kubectl apply -f k8s/zookeeper-deploy.yaml
kubectl apply -f k8s/zookeeper-server.yaml
echo "deploy zookeeper end"
cd - || exit 0

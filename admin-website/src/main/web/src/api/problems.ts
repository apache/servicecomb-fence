import axios from "axios";

export interface SearchTraceRequest {
  timestamp: string;
  traceId: string;
}

export interface LocalEndpoint {
  serviceName: string;
  ipv4: string;
}

export interface TraceItem {
  traceId: string;
  id: string;
  parentId: string;
  kind: string;
  name: string;
  timestamp: number;
  duration: number;
  shared: boolean;
  localEndpoint: LocalEndpoint;
  tags: Map;
}

export interface SearchTraceResponse {
  application: string;
  serviceName: string;
  localhost: string;
  instanceId: string;
  data: TraceItem[];
}

export interface FilterType {
  timestamp: string;
  traceId: string;
}

export function searchTrace(data: FilterType) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchTrace",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId,
    },
  });
}

export function searchLog(data: FilterType) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchLog",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId,
    },
  });
}

export interface LogType {
  timestamp: string;
  instanceId: string;
  serviceName:string;
}

export function getLogs(params: LogType) {
  return axios({
    url:'/api/admin/v1/scb/admin/observability/downloadLog',
    params,
  })
}

export function getMetrics(params: LogType) {
  return axios({
    url:'/api/admin/v1/scb/admin/observability/downloadMetrics',
    params,
  })
}

export function findServices() {
  return axios({
      url:'/api/admin/v1/scb/admin/discovery/findServices',
  })
}

export function findServiceInstances(serviceName: string) {
  let params = {};
  params.serviceName = serviceName;
  return axios({
      url:'/api/admin/v1/scb/admin/discovery/findServiceInstances',
        params,
  })
}

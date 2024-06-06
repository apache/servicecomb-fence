import axios from 'axios';

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
  data: TraceItem[]
}

export function searchTrace(data: SearchTraceRequest) {
  return axios({
           url: '/api/admin/v1/scb/admin/observability/searchTrace',
           params: {
               timestamp: data.timestamp,
               traceId: data.traceId
           },
         });
}

export function searchLog(data: SearchTraceRequest) {
  return axios({
           url: '/api/admin/v1/scb/admin/observability/searchLog',
           params: {
               timestamp: data.timestamp,
               traceId: data.traceId
           },
         }).then(response => {
            return response.data
         })
}

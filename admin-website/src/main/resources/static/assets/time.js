import { g as axios } from "./index.js";
function searchTrace(data) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchTrace",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId
    }
  });
}
function searchLog(data) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/searchLog",
    params: {
      timestamp: data.timestamp,
      traceId: data.traceId
    }
  });
}
function getLogs(params) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/downloadLog",
    params
  });
}
function getMetrics(params) {
  return axios({
    url: "/api/admin/v1/scb/admin/observability/downloadMetrics",
    params
  });
}
function findServices() {
  return axios({
    url: "/api/admin/v1/scb/admin/discovery/findServices"
  });
}
function findServiceInstances(serviceName) {
  let params = {};
  params.serviceName = serviceName;
  return axios({
    url: "/api/admin/v1/scb/admin/discovery/findServiceInstances",
    params
  });
}
function timesHandle(times, isCovert) {
  const date = new Date(times);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${String(date.getMonth() + 1)}` : `${String(date.getMonth() + 1)}`;
  const day = date.getDate() < 10 ? `0${String(date.getDate())}` : `${String(date.getDate())}`;
  const hours = date.getHours() < 10 ? `0${String(date.getHours())}` : `${String(date.getHours())}`;
  const minutes = date.getMinutes() < 10 ? `0${String(date.getMinutes())}` : `${String(date.getMinutes())}`;
  const seconds = date.getSeconds() < 10 ? `0${String(date.getSeconds())}` : `${String(date.getSeconds())}`;
  return `${year}-${month}-${day}${isCovert ? "T" : " "}${hours}:${minutes}:${seconds}`;
}
export {
  getMetrics as a,
  searchLog as b,
  findServiceInstances as c,
  findServices as f,
  getLogs as g,
  searchTrace as s,
  timesHandle as t
};

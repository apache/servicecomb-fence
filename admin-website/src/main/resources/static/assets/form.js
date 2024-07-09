import { q as axios } from "./index.js";
function getBaseData() {
  return axios.get("/api/base/getdata");
}
function getStepData() {
  return axios.get("/api/step/getdata");
}
export {
  getStepData as a,
  getBaseData as g
};

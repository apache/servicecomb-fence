import { H as HwcClient } from "./index.js";
function isCommonError(error) {
  return typeof error === "object" && error !== null && "message" in error && typeof error.message === "string";
}
class BaseUtils {
  static getErrorMessage(error) {
    return this.convertToCommonError(error).message;
  }
  static convertToCommonError(error) {
    if (isCommonError(error)) {
      return error;
    }
    try {
      return new Error(JSON.stringify(error));
    } catch (e) {
      return new Error(String(error));
    }
  }
}
class HwcClientService {
  static async apiRequest(fnName, params, apigInfo) {
    try {
      const response = await HwcClient.apigClient.exec(
        apigInfo.apigGroupName,
        apigInfo.apigName,
        {
          query: { fn_name: fnName },
          body: JSON.stringify(params)
        }
      );
      return await (response == null ? void 0 : response.json());
    } catch (error) {
      return BaseUtils.getErrorMessage(error);
    }
  }
}
export {
  HwcClientService as H
};

import { HwcClient } from '@opentiny/hwc-client';
import { ApigInfo } from '@/types/global';
import BaseUtils from '@/utils/base-utils';

export class HwcClientService {
  static async apiRequest(fnName: string, params: any, apigInfo: ApigInfo) {
    try {
      const response = await HwcClient.apigClient.exec(
        apigInfo.apigGroupName,
        apigInfo.apigName,
        {
          query: { fn_name: fnName },
          body: JSON.stringify(params),
        }
      );
      return await response?.json();
    } catch (error) {
      return BaseUtils.getErrorMessage(error);
    }
  }
}

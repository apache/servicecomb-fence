import { HwcClient } from '@opentiny/hwc-client';

export class HwcClientService {
  static async apiRequest(
    fnName: string,
    params: any,
    api = 'apig_contract',
    apigroup = 'DEFAULT'
  ) {
    const response = await HwcClient.apigClient.exec(apigroup, api, {
      query: { fn_name: fnName },
      body: JSON.stringify(params),
    });
    const result = await response?.json();

    return result?.data;
  }
}

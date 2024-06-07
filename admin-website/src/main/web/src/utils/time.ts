export function getSimpleDate(standardTime: any) {
  let d = new Date(standardTime);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

// 按时间正序
export function sortTime(property: string | number | any) {
  // eslint-disable-next-line func-names
  return function (a: { [x: string]: any }, b: { [x: string]: any }) {
    // eslint-disable-next-line no-var
    let value1 = a[property];
    // eslint-disable-next-line no-var
    let value2 = b[property];
    return (
      new Date(JSON.parse(JSON.stringify(value2))).getTime() -
      new Date(JSON.parse(JSON.stringify(value1))).getTime()
    );
  };
}

// 时间处理特定格式
export function timesHandle(times: any, isCovert:boolean) {
  const date = new Date(times)

  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${String(date.getMonth() + 1)}` : `${String(date.getMonth() + 1)}`;
  const day = date.getDate() < 10 ? `0${String(date.getDate())}` : `${String(date.getDate())}`;
  const hours = date.getHours() < 10 ? `0${String(date.getHours())}` : `${String(date.getHours())}`;
  const minutes = date.getMinutes() < 10 ? `0${String(date.getMinutes())}` : `${String(date.getMinutes())}`;
  const seconds = date.getSeconds() < 10 ? `0${String(date.getSeconds())}` : `${String(date.getSeconds())}`;

  return `${year}-${month}-${day}${isCovert?'T':' '}${hours}:${minutes}:${seconds}`;
}

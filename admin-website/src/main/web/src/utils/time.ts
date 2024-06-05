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
export function timesHandle(times: any) {
  const date = new Date(times)

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())
  const hours = String(date.getHours())
  const minutes = String(date.getMinutes())
  const seconds = String(date.getSeconds())

  return `${year}-${month}-${day} ${Number(hours)<10?`0${hours}`:hours}:${Number(minutes)<10?`0${minutes}`:minutes}:${Number(seconds)<10?`0${seconds}`:seconds}`
}

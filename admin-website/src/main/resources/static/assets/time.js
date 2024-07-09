function getSimpleDate(standardTime) {
  let d = new Date(standardTime);
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}
function sortTime(property) {
  return function(a, b) {
    let value1 = a[property];
    let value2 = b[property];
    return new Date(JSON.parse(JSON.stringify(value2))).getTime() - new Date(JSON.parse(JSON.stringify(value1))).getTime();
  };
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
  getSimpleDate as g,
  sortTime as s,
  timesHandle as t
};

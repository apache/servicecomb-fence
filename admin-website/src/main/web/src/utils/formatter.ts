export function formatNumber(value: number) {
  if (!value) {
    return '0';
  }

  return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

export function formatTrend(value: number) {
  return `${Math.abs(value).toFixed(2)}%`;
}

export function numberToPercent(value: number) {
  if (value === 0) {
    return value;
  }

  return `${(value * 100).toFixed(2)}%`;
}

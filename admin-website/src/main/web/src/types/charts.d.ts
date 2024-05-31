export interface TinyChartsRowItem {
  [key: string]: number | string;
}

export interface TinyChartsData {
  columns: string[];
  rows: TinyChartsRowItem[];
}

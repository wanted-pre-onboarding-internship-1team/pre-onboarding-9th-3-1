import { ChartData } from '../interface/Data';
import { Data } from '../interface/ResponseData';

type Res =
  | never[]
  | {
      [key: string]: Data;
    };

export const createDataList = (res: Res) => {
  const dataList: ChartData[] = [];

  Object.entries(res).forEach(([date, data]) => {
    const newData = {
      timestamp: date,
      ...data,
    };
    dataList.push(newData);
  });

  return dataList;
};

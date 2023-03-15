import { ChartData } from '../interface/Data';
import { Data } from '../interface/ResponseData';
import { createZeroTimeStamp } from './date';

type Res =
  | never[]
  | {
      [key: string]: Data;
    };

export const createTimeStampDataMap = (res: Res) => {
  const timeStampDataMap = new Map<string, Data[]>();

  Object.entries(res).forEach(([date, data]) => {
    const zeroSecondTimeStamp = createZeroTimeStamp(date);
    const localeString = zeroSecondTimeStamp.toLocaleString();

    if (timeStampDataMap.has(localeString)) {
      timeStampDataMap.get(localeString)?.push(data);
      return;
    }

    timeStampDataMap.set(localeString, [data]);
  });

  return timeStampDataMap;
};

export const createChartData = (timeStampDataMap: Map<string, Data[]>) => {
  const resObjectList: ChartData[] = [];

  for (const [date, dataList] of timeStampDataMap.entries()) {
    const mergedData = mergeSameTimeStamp(date, dataList);
    resObjectList.push(mergedData);
  }
  return resObjectList;
};

const mergeSameTimeStamp = (date: string, dataList: Data[]) => {
  const idSet = createIdSet(dataList);
  const valueAreaAverage = averageArea(dataList);
  const valueBarAverage = averageBar(dataList);
  return {
    timestamp: date.toLocaleString(),
    data: {
      value_area: valueAreaAverage,
      value_bar: valueBarAverage,
    },
    idSet,
  };
};

const createIdSet = (dataList: Data[]) => {
  return dataList.reduce((prev, data) => {
    return prev.add(data.id);
  }, new Set<string>());
};

const averageArea = (dataList: Data[]) => {
  const valueAreaSum = dataList.reduce((prev, data) => {
    return prev + data.value_area;
  }, 0);
  return valueAreaSum / dataList.length;
};

const averageBar = (dataList: Data[]) => {
  const valueBarSum = dataList.reduce((prev, data) => {
    return prev + data.value_bar;
  }, 0);
  return valueBarSum / dataList.length;
};

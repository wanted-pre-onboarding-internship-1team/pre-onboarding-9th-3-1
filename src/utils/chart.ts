import { AREA_NORMALIZE_VALUE } from '../const/chart';
import { ChartData } from '../interface/Data';

export const createData = (dataList: ChartData[]) => {
  const labels = createLabels(dataList);
  const data = {
    labels,
    datasets: [createAreaData(dataList), createBarData(dataList)],
  };
  return data;
};

const createLabels = (dataList: ChartData[]) =>
  dataList.map(data => data.timestamp);

const createAreaData = (dataList: ChartData[]) => {
  return {
    type: 'line' as const,
    fill: true,
    label: 'Area',
    data: dataList.map(data => data.data.value_area * AREA_NORMALIZE_VALUE),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  };
};
const createBarData = (dataList: ChartData[]) => {
  return {
    type: 'bar' as const,
    label: 'Bar',
    data: dataList.map(data => data.data.value_bar),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgb(75, 192, 192)',
  };
};

import { ChartData } from '../interface/Data';

export const createChartOption = (dataList: ChartData[]) => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Flexsys',
    },
    tooltip: {
      callbacks: {
        label: (yDatapoint: any) => {
          const label = `${dataList[yDatapoint.dataIndex].id} \n`;

          if (yDatapoint.dataset.label === 'Area') {
            return label + yDatapoint.raw / AREA_NORMALIZE_VALUE;
          }
          return label + yDatapoint.raw;
        },
      },
    },
  },
});

export const AREA_NORMALIZE_VALUE = 100;

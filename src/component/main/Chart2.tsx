import useDataList from '../../hooks/useDataList';
import Area from './Area';
// import Bar from './Bar';
import ChartExample from './ChartExample';
import Data from './Data';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from 'chart.js';
import { Chart, Line, Bar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
export default function Chart2() {
  const { dataList, isLoading } = useDataList();

  if (isLoading) {
    return <div>로딩중</div>;
  }

  const options = {
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
          title: (xDatapoint: any) => {
            return xDatapoint.raw;
          },
          label: (yDatapoint: any) => {
            if (yDatapoint.dataset.label === 'Area') {
              return yDatapoint.raw / 100;
            }
            return yDatapoint.raw;
          },
        },
      },
    },
  };

  const labels = dataList.map(data => data.timestamp);
  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        fill: true,
        label: 'Area',
        data: dataList.map(data => data.data.value_area * 100),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        data: dataList.map(data => data.data.value_bar),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return <Chart type='bar' options={options} data={data} />;
}

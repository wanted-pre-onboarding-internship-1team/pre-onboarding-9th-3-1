import useDataList from '../../hooks/useDataList';
import Area from './Area';
import Bar from './Bar';
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
import { Chart, Line } from 'react-chartjs-2';
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

  //   const maxBar = dataList.reduce((prev, curr) => {
  //     return Math.max(prev, curr.data.value_bar);
  //   }, 0);
  //   const maxArea = dataList.reduce((prev, curr) => {
  //     return Math.max(prev, curr.data.value_area);
  //   }, 0);
  //   return <ChartExample />;
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
    },
  };
  const labels = dataList.map(data => data.timestamp);
  const data = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Bar',
        data: dataList.map(data => data.data.value_bar),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        type: 'line' as const,
        fill: true,
        label: 'Area',
        data: dataList.map(data => data.data.value_area),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Chart type='bar' options={options} data={data} />;
}

// const ChartWrapper = styled.div`
//   display: flex;
// `;
// const DataList = styled.ul`
//   display: flex;
//   width: 800px;
//   height: 500px;
//   border: solid black 1px;
//   position: relative;
// `;

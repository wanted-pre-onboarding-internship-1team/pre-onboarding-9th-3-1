import { useChartContext } from '../contexts/ChartContext';
import {
  Filler,
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  Filler,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const defaultData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const ChartView = () => {
  const [chartdata, setChartData] = useState(defaultData);
  const { data, getChartData, getKeys } = useChartContext();

  const processData = () => {
    const timeStamps = getKeys();

    const newData = {
      labels: timeStamps,
      datasets: [
        {
          type: 'line' as const,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: true,
          label: 'area data',
          data: timeStamps.map(a => getChartData(a).value_area * 100),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          type: 'bar' as const,
          label: 'value bar',
          data: timeStamps.map(a => getChartData(a).value_bar),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
    };
    return newData;
  };

  useEffect(() => {
    const newData = processData();
    setChartData(newData);
  }, [data]);

  const opt = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'hello world',
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };

  return <Chart type='bar' options={opt} data={chartdata} />;
};

export { ChartView };

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
          label: 'area data',
          data: timeStamps.map(a => getChartData(a).value_area),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'area',
          type: 'line' as const,
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 2,
          fill: true,
        },
        {
          label: 'bar data',
          data: timeStamps.map(a => getChartData(a).value_bar),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          type: 'bar' as const,
          yAxisID: 'bar',
        },
      ],
    };
    return newData;
  };

  useEffect(() => {
    const newData = processData();
    setChartData(newData);
  }, [data]);

  const option = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      bar: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        ticks: {
          color: '#f46d25',
        },
      },
      area: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        suggestedMax: 200,
        ticks: {
          color: '#00aa00',
        },
      },
    },
  };

  return <Chart type='bar' options={option} data={chartdata} />;
};

export { ChartView };

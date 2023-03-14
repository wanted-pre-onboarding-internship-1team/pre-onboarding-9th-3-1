import { useDataContext } from '../contexts/DataContext';
import {
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
  Filler,
  Title,
} from 'chart.js';
import React from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Filler,
  Title
);

export default function Charts() {
  const dataValues = useDataContext();
  const labels = Object.keys(dataValues);

  const data = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'Area',
        borderColor: 'rgba(72, 102, 82)',
        borderWidth: 2,
        fill: {
          target: 'start',
          above: 'rgba(72, 102, 82, 0.5)',
        },
        yAxisID: 'y',
        data: Object.values(dataValues).map(houlyData => houlyData.value_area),
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        backgroundColor: '#fbb05c',
        yAxisID: 'y1',
        data: Object.values(dataValues).map(houlyData => houlyData.value_bar),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'WEEK3 플렉시스',
      },
    },
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 1,
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        stacked: false,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        stacked: false,
      },
    },
  };

  return <Chart type='bar' data={data} options={options} />;
}

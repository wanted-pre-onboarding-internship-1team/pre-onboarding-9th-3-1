import { useDataContext } from '../../contexts/DataContext';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  TimeScale,
  TimeSeriesScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
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
  LineController,
  BarController,
  Filler,
  Title,
  TimeScale,
  TimeSeriesScale
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
        yAxisID: 'yArea',
        data: Object.values(dataValues).map(houlyData => houlyData.value_area),
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        backgroundColor: '#fbb05c',
        yAxisID: 'yBar',
        data: Object.values(dataValues).map(houlyData => houlyData.value_bar),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 17,
          },
        },
      },
      title: {
        display: true,
        text: 'Flexsys',
        padding: {
          top: 10,
          bottom: 10,
        },
        aling: 'center',
        font: { weight: 'bold', size: 40 },
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
      yArea: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        stacked: false,
        ticks: {
          font: {
            size: 15,
          },
        },
        title: {
          display: true,
          text: 'Area',
          font: {
            size: 15,
          },
        },
      },
      yBar: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        stacked: false,
        ticks: {
          font: {
            size: 15,
          },
        },
        title: {
          display: true,
          text: 'Bar',
          font: {
            size: 15,
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 15,
          },
          display: true,
          callback: function (index: any, value: any) {
            return index !== 0 && index % 5 === 0
              ? labels[index].split(' ')[1]
              : '';
          },
          maxRotation: 0,
        },
        grid: {
          display: false,
        },
        labelOffset: 10,
        mirror: true,
      },
    },
  };

  return <Chart type='bar' data={data} options={options} />;
}

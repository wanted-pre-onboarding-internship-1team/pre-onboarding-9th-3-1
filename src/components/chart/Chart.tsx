import { useDataContext } from '../../contexts/DataContext';
import {
  Chart as ChartJS,
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
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  BarController,
  Legend,
  Filler,
  Title,
  Tooltip
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
        borderColor: 'rgb(7, 101, 171)',
        borderWidth: 4,
        pointRadius: 0,
        pointHoverBackgroundColor: 'rgb(241, 177, 58)',
        fill: {
          target: 'start',
          above: 'rgba(7, 101, 171,0.5)',
        },
        yAxisID: 'yArea',
        data: Object.values(dataValues).map(houlyData => houlyData.value_area),
        order: 1,
      },
      {
        type: 'bar' as const,
        label: 'Bar',
        backgroundColor: 'rgb(241, 177, 58)',
        hoverBackgroundColor: 'rgba(247, 207, 165)',
        yAxisID: 'yBar',
        data: Object.values(dataValues).map(houlyData => houlyData.value_bar),
        order: 2,
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
        aline: 'center',
        font: { weight: 'bold', size: 40 },
        color: 'rgb(7, 101, 171)',
      },
      tooltip: {
        callbacks: {
          beforeBody: (tooltipItem: any) => {
            const beforeBody = Object.values(dataValues).map(
              houlyData => houlyData.id
            )[tooltipItem[0].dataIndex];
            return beforeBody;
          },
          bodySpacing: 10,
        },
        bodySpacing: 10,
        titleFont: { size: 15 },
        bodyFont: { weight: 'bold', size: 15 },
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
          stepSize: 40,
        },
        suggestedMax: 200,
        suggestedMin: 0,
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
          stepSize: 4000,
        },
        suggestedMin: 10000,
        suggestedMax: 20000,

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
          tickMarkLength: 40,
          offsetGridLines: true,
          display: true,
          drawTicks: false,
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Chart type='bar' data={data} options={options} />;
}

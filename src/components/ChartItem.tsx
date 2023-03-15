import createToolTip from '../utils/createToolTip';
import useChartData from './../hooks/useChartData';
import { ApexOptions } from 'apexcharts';
import Chart from 'react-apexcharts';

const ChartItem = () => {
  const { categories, id, barData, areaData } = useChartData();

  const series = [
    {
      name: 'Bar',
      type: 'column',
      data: barData,
    },
    {
      name: 'Area',
      type: 'area',
      data: areaData,
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 2],
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008ffb',
        },
        labels: {
          style: {
            colors: '#008ffb',
          },
        },
        title: {
          text: 'Bar',
          rotate: 0,
          style: {
            color: '#008ffb',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#44a0a0',
        },
        labels: {
          style: {
            colors: '#44a0a0',
          },
        },
        title: {
          text: 'Area',
          rotate: 0,
          style: {
            color: '#44a0a0',
          },
        },
      },
    ],
    colors: ['#35a2eb', '#4bc0c0'],
    fill: {
      opacity: [1, 0.25],
      type: 'gradient',
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 1,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    tooltip: {
      shared: true,
      custom: options => {
        return createToolTip({ options, id });
      },
      fixed: {
        enabled: true,
        position: 'bottomLeft',
        offsetX: 120,
        offsetY: -60,
      },
    },
    markers: {
      size: 0,
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  return <Chart options={options} series={series} />;
};

export default ChartItem;

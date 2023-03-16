import useMockList from '../hooks/useMockList';
import useParam from '../hooks/useParam';
import ChartFilter from './ChartFilter';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Chart() {
  const navigator = useNavigate();
  const { timeList, barValueList, areaValueList } = useMockList();
  const filter = useParam('filter');
  const series = [
    {
      name: 'area',
      type: 'area',
      data: areaValueList,
    },
    {
      name: 'bar',
      type: 'column',
      data: barValueList,
    },
  ];
  const chartOptions: ApexOptions = {
    chart: {
      events: {
        click: (event, chartContext, config) => {
          const index = config?.dataPointIndex;
          const { id } = config.globals.initialSeries[0].data[index];
          if (id) navigator(`/?filter=${id}`);
        },
      },
    },
    fill: {
      gradient: {
        shade: 'light',
        type: 'vertical',
        stops: [0, 100],
      },
    },
    yaxis: [
      {
        seriesName: 'area',

        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: 'area',
        },
      },
      {
        opposite: true,
        seriesName: 'bar',
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        title: {
          text: 'bar',
        },
      },
    ],
    xaxis: {
      categories: timeList,
      tickAmount: 8,
      labels: {
        rotate: 0,
      },
    },
    stroke: {
      width: [2, 1],
    },
    colors: [
      'skyblue',
      function ({
        seriesIndex,
        dataPointIndex,
        w,
      }: {
        seriesIndex: number;
        dataPointIndex: number;
        w: any;
      }) {
        const { id } =
          w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        if (filter) {
          if (id === filter) return '#D9534F';
        }
        return '#5bc0de';
      },
    ],
    tooltip: {
      custom: function ({
        seriesIndex,
        dataPointIndex,
        w,
      }: {
        seriesIndex: number;
        dataPointIndex: number;
        w: any;
      }) {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        return `
        <ul class="tooltip">
          <li class="tooltip__inner-title">${data.id}<br /></li>
          <li class="tooltip__inner">value_area : ${data.area}<br /></li>
          <li class="tooltip__inner">value_bar : ${data.bar}<br /></li>
        <ul>
          `;
      },
    },
  };
  return (
    <Container>
      <ChartFilter />
      <ApexCharts options={chartOptions} series={series} height={600} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  .tooltip {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .tooltip__inner-title {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

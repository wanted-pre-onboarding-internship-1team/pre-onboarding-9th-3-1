import { CHART_COLOR } from '../constants/colors';
import useMockList from '../hooks/useMockList';
import createCustomTooltip from '../utils/createCustomTooltip';
import useFilterList from './../hooks/useFilterList';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

type Points = {
  x: string;
  y: number;
  label?: {
    text: string;
    borderColor: string;
    offsetY: number;
  };
  seriesIndex?: number;
  marker: {
    size: number;
    strokeColor: string;
    radius: number;
  };
};

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList } = useMockList();
  const { currentFilter, setFilter } = useFilterList('id');

  const setPoints = () => {
    const defaultOptions = {
      seriesIndex: 0,
      marker: {
        size: 4,
        strokeColor: CHART_COLOR.areaPoint,
        radius: 2,
      },
      label: {
        borderColor: CHART_COLOR.areaPoint,
        offsetY: 0,
      },
    };

    const newOptions = idList.reduce<Points[]>((acc, crr, idx) => {
      const option = {
        ...defaultOptions,
        x: timeList[idx],
        y: Math.min(95, areaValueList[idx]),
        label: { ...defaultOptions.label, text: crr },
      };
      if (crr === currentFilter) acc.push(option);
      return acc;
    }, []);

    return newOptions;
  };

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
      id: 'flexsys',
      events: {
        click: (event, chartContext, config) => {
          const currentId = idList[config.dataPointIndex];

          if (!currentId) {
            return;
          }

          setFilter(currentId);
        },
        updated: (chartContext, config) => {
          const isAreaActive = !!config.config.series[0].data.length;

          if (!isAreaActive) chartContext.clearAnnotations();
        },
      },
    },
    fill: {
      colors: [
        () => {
          if (!idList.includes(currentFilter)) return CHART_COLOR.area;
          return CHART_COLOR.areaLight;
        },
        (options: any) => {
          const { dataPointIndex } = options;

          if (!idList.includes(currentFilter)) return CHART_COLOR.bar;

          if (idList[dataPointIndex] === currentFilter)
            return CHART_COLOR.barPoint;

          return CHART_COLOR.barLight;
        },
      ],
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
        tooltip: {
          enabled: true,
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
        tooltip: {
          enabled: true,
        },
      },
    ],
    xaxis: {
      categories: timeList,
      tickAmount: 6,
      labels: {
        rotate: 0,
      },
      tooltip: {
        enabled: false,
      },
    },
    stroke: {
      width: [0, 0],
      curve: 'smooth',
    },
    legend: {
      show: true,
      markers: {
        fillColors: [CHART_COLOR.area, CHART_COLOR.bar],
      },
    },
    tooltip: {
      // shared: true,
      custom: options => createCustomTooltip({ options, idList, timeList }),
    },
    annotations: {
      points: setPoints(),
    },
  };

  return (
    <Container>
      <ApexCharts options={chartOptions} series={series} height={600} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
`;

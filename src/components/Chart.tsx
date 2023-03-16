import useMockList from '../hooks/useMockList';
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
        strokeColor: '#FF4560',
        radius: 2,
      },
      label: {
        borderColor: '#FF4560',
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
          if (!idList.includes(currentFilter)) return '#66C7F4';
          return '#66c7f489';
        },
        (options: any) => {
          const { dataPointIndex } = options;

          if (!idList.includes(currentFilter)) return '#a9d197';

          if (idList[dataPointIndex] === currentFilter) return '#d63c31';

          return '#a2be9592';
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
        fillColors: ['#66C7F4', '#99C2A2'],
      },
    },
    tooltip: {
      custom: (opt: any) =>
        createCustomTooltip({
          opt,
          timeList,
          barValueList,
          areaValueList,
          idList,
        }),
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

function createCustomTooltip({
  opt,
  timeList,
  barValueList,
  areaValueList,
  idList,
}: {
  opt: any;
  timeList: string[];
  barValueList: number[];
  areaValueList: number[];
  idList: string[];
}) {
  const index = opt.dataPointIndex;
  return `
  <ul class='arrow-box'>
    <li class='arrow-box__item'>
      ${timeList[index]}
    </li>
    <li class='arrow-box__item'>
      <div style="background:${opt.w.config.legend.markers.fillColors[0]}; width:10px; height:10px; border-radius:10px"></div>
      <div>area: </div>
      <div>${areaValueList[index]}</div>
    </li>
    <li class='arrow-box__item'>
      <div style="background:${opt.w.config.legend.markers.fillColors[1]}; width:10px; height:10px; border-radius:10px"></div>
      <div>bar: </div>
      <div>${barValueList[index]}</div>
    </li>
    <li class='arrow-box__item'>
      <div>지역: </div>
      <div>${idList[index]}</div>
    </li>
  </ul>
  `;
}

const Container = styled.div`
  width: 100%;
  max-width: 1200px;

  .arrow-box {
  }

  .arrow-box li {
    padding: 5px 10px;
  }

  .arrow-box__item {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

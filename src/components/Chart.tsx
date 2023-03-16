import useMockList from '../hooks/useMockList';
import ChartFilter from './ChartFilter';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Chart() {
  const navigator = useNavigate();
  const { timeList, idList, barValueList, areaValueList } = useMockList();
  const { search } = useLocation();
  const filter = new URLSearchParams(search).get('filter') || '';
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
      function ({ seriesIndex, dataPointIndex, w }: any) {
        const { id } =
          w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        if (filter) {
          if (id === filter) return '#D9534F';
        }
        return '#5bc0de';
      },
    ],
    // tooltip: {
    //   custom: (opt: any) =>
    //     createCustomTooltip({
    //       opt,
    //       timeList,
    //       barValueList,
    //       areaValueList,
    //       idList,
    //     }),
    // },
  };
  return (
    <Container>
      <ChartFilter />
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
								<div style="background:${opt.w.globals.colors[0]}; width:10px; height:10px; border-radius:10px"></div>
								<div>bar: </div>
								<div>${barValueList[index]}</div>
							</li>
							<li class='arrow-box__item'>
								<div style="background:${opt.w.globals.colors[1]}; width:10px; height:10px; border-radius:10px"></div>
								<div>area: </div>
								<div>${areaValueList[index]}</div>
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

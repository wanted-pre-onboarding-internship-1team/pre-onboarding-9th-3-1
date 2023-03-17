import useFilter from '../hooks/useFilter';
import useMockList from '../hooks/useMockList';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList } = useMockList();
  const { currentParam, pushParams } = useFilter();

  const series = [
    {
      name: 'area',
      type: 'area',
      data: areaValueList.map((v, i) => ({ x: i, y: v, id: idList[i] })),
    },
    {
      name: 'bar',
      type: 'column',
      data: barValueList.map((v, i) => ({ x: i, y: v, id: idList[i] })),
    },
  ];
  const chartOptions: ApexOptions = {
    chart: {
      events: {
        click(event, chartContext, config) {
          const index = config.dataPointIndex;
          const area = idList[index];
          pushParams(area);
        },
      },
    },

    plotOptions: {
      bar: {
        columnWidth: '100%',
      },
    },
    stroke: { width: 2 },
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
      type: 'category',
      categories: timeList,
      tickAmount: 6,
      labels: {
        rotate: 0,
      },
    },
    colors: [
      function ({ seriesIndex, dataPointIndex, w }: any) {
        return '#66C7F4';
      },

      function ({ seriesIndex, dataPointIndex, w }: any) {
        const id =
          w.globals.initialSeries[seriesIndex].data[dataPointIndex]?.id;

        if (id === currentParam) return '	#F9A3A4';
        return '#99C2A2';
      },
    ],
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
  };
  return (
    <Container>
      <ApexCharts options={chartOptions} series={series} height={600} />
    </Container>
  );
}
//['#66C7F4', '#99C2A2']
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
								<div style="background:${opt.w.globals.colors[1]}; width:10px; height:10px; border-radius:10px"></div>
								<div>bar: </div>
								<div>${barValueList[index]}</div>
							</li>
							<li class='arrow-box__item'>
								<div style="background:${opt.w.globals.colors[0]}; width:10px; height:10px; border-radius:10px"></div>
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

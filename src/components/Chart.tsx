import useMockList from '../hooks/useMockList';
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const {
    timeList,
    idList,
    barValueList,
    areaValueList,
    selectedID,
    setSelectID,
    idSet,
  } = useMockList();
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
        dataPointSelection: (event, chartContext, config) => {
          const index = config.dataPointIndex;
          console.log(index);
        },
      },
    },
    fill: {
      //   type: 'gradient',
      gradient: {
        // shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.1,
        opacityTo: 1,
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
      tickAmount: 6,
      labels: {
        rotate: 0,
      },
    },
    colors: [
      function ({ dataPointIndex }: unknown) {
        return '#66C7F4';
      },
      function ({ dataPointIndex }: unknown) {
        if (idList[dataPointIndex] === selectedID) {
          return '#FF0000';
        }
        return '#99C2A2';
      },
    ],
    stroke: {
      width: [2, 1],
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
  };
  return (
    <Container>
      {Array.from(idSet).map(id => {
        return (
          <button
            key={id}
            onClick={() => {
              setSelectID(id);
            }}>
            {id}
          </button>
        );
      })}
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

import useMockList from '../../hooks/useMockList';
import useQuerystring from '../../hooks/useQuerystring';
import Filter from '../filter/Filter';
import { ApexOptions } from 'apexcharts';
import React from 'react';
import { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { BiFilterAlt } from 'react-icons/bi';
import styled from 'styled-components';

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList } = useMockList();
  const [currentLocal, setCurrentLocal] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const { queries, addQuery, deleteQuery } = useQuerystring();

  const series = [
    {
      name: 'Area',
      type: 'area',
      data: areaValueList,
    },
    {
      name: 'Bar',
      type: 'column',
      data: barValueList,
    },
  ];
  const chartOptions: ApexOptions = {
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 50,
      offsetY: 10,
      onItemClick: {
        toggleDataSeries: true,
      },
      markers: {
        fillColors: ['#66C7F4', '#99C2A2'],
      },
    },
    chart: {
      height: 350,
      type: 'bar',
      stacked: false,
      events: {
        click: (event, chart, config) => {
          const clickLocalData = idList[config.dataPointIndex];
          queries.includes(clickLocalData)
            ? deleteQuery(clickLocalData)
            : addQuery(clickLocalData);
        },
      },
    },
    stroke: {
      width: [0, 1],
      curve: 'smooth',
    },
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
          text: 'Area',
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
          text: 'Bar',
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
      ({ dataPointIndex }: { dataPointIndex: any }) => {
        const clickLocalData = idList[dataPointIndex];
        return queries.includes(clickLocalData) ? '#45a054' : '#66C7F4';
      },
      ({ dataPointIndex }: { dataPointIndex: any }) => {
        const clickLocalData = idList[dataPointIndex];
        return queries.includes(clickLocalData) ? '#e9184b' : '#99C2A2';
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
          queries,
        }),
    },
  };

  return (
    <Container>
      <ApexCharts options={chartOptions} series={series} height={600} />
      <BiFilterAlt
        className='icon'
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      />
      <Filter isFilterOpen={isFilterOpen} />
    </Container>
  );
}

function createCustomTooltip({
  opt,
  timeList,
  barValueList,
  areaValueList,
  idList,
  queries,
}: {
  opt: any;
  timeList: string[];
  barValueList: number[];
  areaValueList: number[];
  idList: string[];
  queries: string[];
}) {
  const index = opt.dataPointIndex;
  return `
						<ul class='arrow-box'>
							<li class='arrow-box__item'>
								${timeList[index]}
							</li>
							<li class='arrow-box__item'>
								<div style="background:${
                  queries.includes(idList[index]) ? '#45a054' : '#66C7F4'
                }; width:10px; height:10px; border-radius:10px"></div>
								<div>Area: </div>
								<div>${areaValueList[index]}</div>
                </li>
                <li class='arrow-box__item'>
								<div style="background:${
                  queries.includes(idList[index]) ? '#e9184b' : '#99C2A2'
                }; width:10px; height:10px; border-radius:10px"></div>
								<div>Bar: </div>
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
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 50px;

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

  .icon {
    position: absolute;
    top: 0px;
    right: 140px;
    cursor: pointer;
    font-size: 23px;
  }
`;

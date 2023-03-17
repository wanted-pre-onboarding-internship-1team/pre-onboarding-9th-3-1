import useMockList from '../hooks/useMockList';
import { ApexOptions } from 'apexcharts';
import { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList, filterList } =
    useMockList();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentParams = searchParams.get('id');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(
    currentParams ? idList.findIndex(id => id === currentParams) : -1
  );

  const [highlightedValues, setHighlightedValues] = useState<{
    bar: (number | null)[];
    area: (number | null)[];
  }>({
    bar: barValueList.map((val, idx) =>
      idx === highlightedIndex ? val : null
    ),
    area: areaValueList.map((val, idx) =>
      idx === highlightedIndex ? val : null
    ),
  });
  useEffect(() => {
    if (currentParams) {
      const index = idList.findIndex(id => id === currentParams);
      if (index !== -1) {
        setHighlightedIndex(index);
        const newBarValues = barValueList.map((val, idx) =>
          idx === index ? val : null
        );
        const newAreaValues = areaValueList.map((val, idx) =>
          idx === index ? val : null
        );
        for (let i = 0; i < idList.length; i++) {
          if (idList[i] === currentParams) {
            newBarValues[i] = barValueList[i];
            newAreaValues[i] = areaValueList[i];
          }
        }
        setHighlightedValues({
          bar: newBarValues,
          area: newAreaValues,
        });
      }
    }
  }, [currentParams]);

  const series = [
    {
      name: 'area',
      type: 'area',
      data: areaValueList.map((val, idx) => ({
        x: timeList[idx],
        y: val,
      })),
    },
    {
      name: 'bar',
      type: 'column',
      data: barValueList.map((val, idx) => ({
        x: timeList[idx],
        y: val,
      })),
    },
  ];

  const chartOptions: ApexOptions = {
    chart: {
      events: {
        click: (event, chartContext, config) => {
          const clickedIndex = config.dataPointIndex;
          const clicked = idList[clickedIndex];
          if (clicked) {
            setSearchParams({ id: clicked });
            setHighlightedIndex(clickedIndex);
            setHighlightedValues({
              bar: barValueList.map((val, idx) =>
                idx === clickedIndex ? val : highlightedValues.bar[idx]
              ),
              area: areaValueList.map((val, idx) =>
                idx === clickedIndex ? val : highlightedValues.area[idx]
              ),
            });
          }
        },
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
        max: 100,
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
    stroke: {
      width: [2, 1],
    },
    colors: [
      '#66C7F4',
      function ({
        value,
        dataPointIndex,
        w,
      }: {
        value: number;
        dataPointIndex: number;
        w: any;
      }) {
        if (currentParams === null) return '#99C2A2';
        if (
          highlightedValues &&
          highlightedValues.bar[dataPointIndex] !== undefined &&
          highlightedValues.bar[dataPointIndex] === value
        ) {
          return '#D9534F';
        }
        return '#99C2A2';
      },
    ],
    tooltip: {
      intersect: true,
      shared: false,
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

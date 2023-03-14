import useMockList from '../hooks/useMockList';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList } = useMockList();

  const test = data => {
    console.log(data);
  };
  return (
    <Container>
      <ApexCharts
        height='600'
        series={[
          {
            name: 'bar',
            type: 'column',
            data: barValueList,
          },
          {
            name: 'area',
            type: 'area',
            data: areaValueList,
          },
        ]}
        options={{
          yaxis: [
            {
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
            {
              opposite: true,
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
          ],
          xaxis: {
            categories: timeList,
          },
          colors: ['#99C2A2', '#66C7F4'],
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
        }}
      />
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
  position: absolute;
  width: 100%;
  max-width: 1200px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

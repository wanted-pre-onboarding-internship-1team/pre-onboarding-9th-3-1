import useMockList from '../hooks/useMockList';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const { timeList, idList, barValueList, areaValueList } = useMockList();
  const chartOptions = {};
  return (
    <Container>
      <ApexCharts />
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

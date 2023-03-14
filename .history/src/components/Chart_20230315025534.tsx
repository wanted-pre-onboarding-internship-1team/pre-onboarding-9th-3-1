import useMockList from '../hooks/useMockList';
import ApexCharts from 'react-apexcharts';
import styled from 'styled-components';

export default function Chart() {
  const test = useMockList();
  return (
    <Container>
      <ApexCharts
        height='500'
        width='1000'
        series={[
          {
            name: 'bar',
            type: 'column',
            data: test.barValueList,
          },
          {
            name: 'area',
            type: 'area',
            data: test.areaValueList,
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
                text: 'area1',
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
                text: 'barList',
              },
            },
            {
              seriesName: 'id',
              show: false,
            },
          ],
          xaxis: {
            categories: test.timeList,
          },
          colors: ['#99C2A2', '#66C7F4'],
          tooltip: {
            y: {
              formatter: function (v) {
                console.log(v);
                return v + '123';
              },
            },

            z: {
              formatter: function (v) {
                console.log(v);
                return v + '123';
              },
            },
            custom: function (options) {
              console.log(options);
              const index = options.dataPointIndex;
              return `
                  <ul class='arrow-box'>
                  <li class='arrow-box__item'>
                  ${test.timeList[index]}
                    </li>
                    <li class='arrow-box__item'>
                      <div style="background:${options.w.globals.colors[0]}; width:10px; height:10px; border-radius:10px"></div>
                      <div>bar: </div>
                      <div>${test.barValueList[index]}</div>
                    </li>
                    <li class='arrow-box__item'>
                      <div style="background:${options.w.globals.colors[1]}; width:10px; height:10px; border-radius:10px"></div>
                      <div>area: </div>
                      <div>${test.areaValueList[index]}</div>
                    </li>
                    <li class='arrow-box__item'>
                      
                      <div>지역: </div>
                      <div>${test.idList[index]}</div>
                    </li>
                  </ul>
                `;
            },
          },
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  max-width: 700px;
  overflow: hidden;
`;

import { api } from '../apis';
import { GetMockResponse } from '../apis/types/mock';
import useMockList from '../hooks/useMockList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';

export default function Mainpage() {
  const test = useMockList();
  console.log(test);
  return (
    <div>
      <ReactApexChart
        options={{
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: 'top', // 데이터 레이블 위치 설정
                formatter: function (val, opts) {
                  // 데이터 레이블 포맷터 함수
                  if (opts.index === 2) {
                    // 인덱스 2번 데이터에 하이라이트 적용
                    return `<span style="color:#008000">${val}</span>`; // 하이라이트 색상은 초록색
                  } else {
                    return val;
                  }
                },
              },
            },
          },
          dataLabels: {
            enabled: true,
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            labels: {
              style: {
                fontSize: '14px',
              },
            },
          },
        }}
        series={[
          {
            name: 'Sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 200, 240],
          },
        ]}
        type='bar'
      />
      {/* <ApexCharts
        height='500'
        width='1000'
        series={[
          {
            name: 'bar',
            type: 'column',
            data: [...test.barValueList.map(item => ({ y: 1 }))],
          },
          {
            name: 'area',
            type: 'area',
            data: test.areaValueList,
          },
        ]}
        options={{
          dataLabels: {
            enabled: false,
          },

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
          colors: ['#99C2A2', '#66C7F4', '#caa137'],
        }}
      /> */}
    </div>
  );
}

{
  /* <div>
<ApexCharts
  height='500'
  width='1000'
  series={[
    {
      name: 'TEAM A',
      type: 'column',
      data: test.areaValueList,
    },
  ]}
  options={{
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth',
    },

    xaxis: {
      categories: test.timeList,
    },
    colors: ['red', 'blue'],
  }}
/>
</div> */
}

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
      <ApexCharts
        height='500'
        width='500'
        series={[
          {
            name: 'test',
            data: [
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 3 },
              { x: 4, y: 4 },
            ],
          },
        ]}
        options={{
          xaxis: {
            type: 'category',
          },
        }}
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
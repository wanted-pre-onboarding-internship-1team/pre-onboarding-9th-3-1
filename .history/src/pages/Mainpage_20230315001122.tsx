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
      {/* <ApexCharts
        type='line'
        height='500'
        width='500'
        series={[
          {
            name: 'price',
            data: [10, 19, 17, 36, 44, 45, 20, 38],
          },
        ]}
        options={{
          theme: {
            mode: 'dark',
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
          grid: { show: false },
          stroke: {
            curve: 'smooth',
            width: 5,
          },
          yaxis: {
            show: false,
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          fill: {
            type: 'gradient',
            gradient: { gradientToColors: ['blue'], stops: [0, 100] },
          },
          colors: ['red'],
        }}
      /> */}
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
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
          },
          yaxis: [
            {
              seriesName: 'area',
              title: {
                text: 'Columns',
              },
            },
          ],
          xaxis: {
            categories: test.timeList,
          },
          colors: ['#99C2A2', '#66C7F4'],
        }}
      />
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

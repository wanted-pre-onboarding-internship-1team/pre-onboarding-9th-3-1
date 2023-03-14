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
            name: 'Column A',
            type: 'column',
            data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5],
          },
          {
            name: 'Column B',
            type: 'column',
            data: [10, 19, 27, 26, 34, 35, 40, 38],
          },
          {
            name: 'Line C',
            type: 'line',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
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
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              seriesName: 'Column A',
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: 'Columns',
              },
            },
            {
              seriesName: 'Column A',
              show: false,
            },
            {
              opposite: true,
              seriesName: 'Line C',
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
              },
              title: {
                text: 'Line',
              },
            },
          ],
          colors: ['#99C2A2', '#C5EDAC', '#66C7F4'],
          legend: {
            horizontalAlign: 'left',
            offsetX: 40,
          },
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
          {
            name: 'id',
            type: 'none',
            data: test.areaValueList,
          },
        ]}
        options={{
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
          },
          dataLabels: {
            enabled: false,
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
                text: 'area1',
              },
            },
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
          ],
          xaxis: {
            categories: test.timeList,
          },
          colors: ['#99C2A2', '#66C7F4', '#caa137'],
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

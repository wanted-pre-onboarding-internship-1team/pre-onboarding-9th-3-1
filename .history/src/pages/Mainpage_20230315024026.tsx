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
      {/* <ApexCharts
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
          colors: ['#99C2A2', '#66C7F4', '#caa137'],
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
              return (
                '<div class="arrow_box">' +
                '<span>' +
                '123' +
                '</span>' +
                '</div>'
              );
            },
          },
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
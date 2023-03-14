import { api } from '../apis';
import axios from 'axios';
import React from 'react';
import ApexCharts from 'react-apexcharts';

export default function Mainpage() {
  api.mock.getMockDatas().then(data => console.log(data));
  return (
    <div>
      <ApexCharts
        height='500'
        width='500'
        series={[
          {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
          },
          {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
          },
          {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
          },
        ]}
        options={{
          theme: {
            mode: 'light',
          },

          grid: { show: false },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
          },
          plotOptions: {
            bar: {
              columnWidth: '50%',
            },
          },
          yaxis: {
            show: false,
          },
          colors: ['red'],
        }}
      />
    </div>
  );
}

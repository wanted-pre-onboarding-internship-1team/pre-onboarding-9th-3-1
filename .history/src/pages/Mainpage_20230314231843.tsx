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
            name: 'TEAM A',
            type: 'column',
            data: test.areaValueList,
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

          yaxis: {
            show: false,
          },
          colors: ['red'],
        }}
      />
    </div>
  );
}

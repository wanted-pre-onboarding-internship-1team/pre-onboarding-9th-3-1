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
            name: 'TEAM A',
            type: 'column',
            data: test.areaValueList,
          },
        ]}
        options={{
          theme: {
            mode: 'light',
          },

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

          yaxis: {
            show: false,
          },
          xaxis: {
            categories: test.timeList,
          },
          colors: ['red'],
        }}
      />
    </div>
  );
}

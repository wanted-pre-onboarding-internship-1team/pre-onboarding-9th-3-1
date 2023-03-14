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

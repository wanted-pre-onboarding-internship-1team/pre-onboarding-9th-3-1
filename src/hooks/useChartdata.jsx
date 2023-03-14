import React, { useEffect, useRef, useState } from 'react';
import { getChartData } from '../apis/api';

const useChartdata = () => {
  const chartData = useRef([]);

  useEffect(() => {
    getChartData().then(({ data }) => (chartData.current = data));
  });

  return chartData;
};

export default useChartdata;

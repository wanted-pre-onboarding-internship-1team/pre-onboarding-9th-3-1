import { MockAPI } from '../apis/MockAPI';
import useChart from '../hooks/useChart';
import { ChartMap } from '../interfaces/API';
import { ChartData } from '../interfaces/ChartData';
import React, { createContext, useContext } from 'react';

type ChartContextProps = {
  children: React.ReactNode;
};

type chartContextReturn = {
  data: ChartMap;
  getChartData: (s: string) => ChartData;
  getKeys: () => string[];
};

const defaultChartData: ChartData = {
  id: '1',
  value_area: 1,
  value_bar: 1,
};

const ChartContext = createContext<chartContextReturn>({
  data: {
    1: defaultChartData,
  },
  getChartData: (s: string) => {
    return defaultChartData;
  },
  getKeys: () => {
    return [];
  },
});

export const ChartProvider = ({ children }: ChartContextProps) => {
  const mockApi: MockAPI = new MockAPI();
  const [data, { getChartData, getKeys }] = useChart(mockApi);

  return (
    <ChartContext.Provider value={{ data, getChartData, getKeys }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartContext = () => useContext(ChartContext);

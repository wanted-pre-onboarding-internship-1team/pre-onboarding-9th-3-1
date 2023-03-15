import { MockAPI } from '../apis/MockAPI';
import useChart from '../hooks/useChart';
import React, { createContext } from 'react';

type ChartContextProps = {
  children: React.ReactNode;
};

const ChartContext = createContext({});

const ChartProvider = ({ children }: ChartContextProps) => {
  const mockApi: MockAPI = new MockAPI();
  const { getChartData, getKeys } = useChart(mockApi);

  return (
    <ChartContext.Provider value={{ getChartData, getKeys }}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;

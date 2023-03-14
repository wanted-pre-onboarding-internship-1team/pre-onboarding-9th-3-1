import Data from '@/types/Data';
import DataContextType from '@/types/DataContextType';
import React, { useEffect, useState } from 'react';
import DataService from '../services/dataService';

export const DataContext = React.createContext<DataContextType>({
  data: null,
});

export function DataProvider({
  children,
  dataService,
}: {
  children: React.ReactNode;
  dataService: DataService;
}) {
  const [data, setData] = useState<Data | null>();
  useEffect(() => {
    dataService.fetchData().then(res => setData(res.response));
  }, [dataService]);
  return (
    <DataContext.Provider value={{ data: data || null }}>
      {children}
    </DataContext.Provider>
  );
}

import useFetch from '../hooks/useFetch';
import { DataType } from '../types/DataType';
import React, { createContext, useContext } from 'react';

const DataContext = createContext<DataType>({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const dataValues = useFetch();

  return (
    <DataContext.Provider value={dataValues}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

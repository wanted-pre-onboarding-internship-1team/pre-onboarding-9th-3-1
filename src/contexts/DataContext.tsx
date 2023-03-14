import { httpClient } from '../apis/HttpClient';
import { DataType } from '../types/DataType';
import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext<DataType>({});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataValues, setDataValues] = useState<DataType>({});

  useEffect(() => {
    httpClient()
      .then(res => setDataValues(res.data.response))
      .catch(err => {
        if (err instanceof Error) throw err;
      });
  }, []);

  return (
    <DataContext.Provider value={dataValues}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

import { Data } from '../types/data.types';
import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export const DataValueContext = createContext<Data[] | undefined>(undefined);
export const DataSetContext = createContext<
  Dispatch<SetStateAction<Data[] | undefined>>
>(() => {
  return;
});

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Data[] | undefined>(undefined);

  return (
    <DataValueContext.Provider value={data}>
      <DataSetContext.Provider value={setData}>
        {children}
      </DataSetContext.Provider>
    </DataValueContext.Provider>
  );
};

export default DataProvider;

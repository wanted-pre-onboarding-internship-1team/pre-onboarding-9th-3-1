import useMockList from '../hooks/useMockList';
import { ReactNode, createContext, useContext } from 'react';

interface ValueContext {
  timeList: string[];
  idList: string[];
  barValueList: number[];
  areaValueList: number[];
}

interface IDContext {
  selectedID: string;
  setSelectID: React.Dispatch<React.SetStateAction<string>> | undefined;
  idSet: Set<string>;
}

const DataValueContext = createContext<ValueContext>({
  timeList: [],
  idList: [],
  barValueList: [],
  areaValueList: [],
});
const DataIDContext = createContext<IDContext>({
  selectedID: '전체',
  setSelectID: undefined,
  idSet: new Set<string>(),
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const {
    timeList,
    idList,
    barValueList,
    areaValueList,
    selectedID,
    setSelectID,
    idSet,
  } = useMockList();
  const dataContextValue = {
    timeList,
    idList,
    barValueList,
    areaValueList,
  };
  const idContextValue = {
    selectedID,
    setSelectID,
    idSet,
  };
  return (
    <DataValueContext.Provider value={dataContextValue}>
      <DataIDContext.Provider value={idContextValue}>
        {children}
      </DataIDContext.Provider>
    </DataValueContext.Provider>
  );
};

export const useDataValueContext = () => useContext(DataValueContext);
export const useDataIDContext = () => useContext(DataIDContext);

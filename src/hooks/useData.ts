import { DataValueContext } from './../contexts/DataContext';
import { useContext } from 'react';

const useData = () => {
  const data = useContext(DataValueContext);

  return data;
};

export default useData;

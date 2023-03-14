import getDataApi from '../apis/dataApi';
import { DataSetContext } from '../contexts/DataContext';
import { useContext } from 'react';

const useGetData = () => {
  const setData = useContext(DataSetContext);

  const updateData = () =>
    getDataApi().then(response => {
      setData(response);
    });

  return updateData;
};

export default useGetData;

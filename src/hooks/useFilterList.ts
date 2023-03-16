import { useSearchParams } from 'react-router-dom';

const useFilterList = (paramsName: string) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(paramsName) || '';

  const setFilter = (newValue: string) =>
    setSearchParams({ [paramsName]: newValue });

  return { currentFilter, setFilter };
};

export default useFilterList;

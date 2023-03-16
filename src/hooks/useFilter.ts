import { useSearchParams } from 'react-router-dom';

const useFilter = () => {
  const [filterParams, setFilterParams] = useSearchParams();
  const filterString = filterParams.get('filter') || '';
  const filter = filterString?.split('&').filter(s => s.length);

  const addFilter = (value: string) => {
    const newFilter = [...filter, value];

    setFilterParams({ filter: newFilter.join('&') });
  };

  const deleteFilter = (value: string) => {
    const deletedFilter = filter.filter(s => {
      return s !== value;
    });
    setFilterParams({ filter: deletedFilter.join('&') });
  };

  return [filter, addFilter, deleteFilter] as const;
};

export { useFilter };

import { useSearchParams } from 'react-router-dom';

export default function useQuerystring() {
  const [searchParams, setSearchParams] = useSearchParams();

  const queries = searchParams.getAll('local');

  const addQuery = (value: string) => {
    if (value === undefined) return;
    searchParams.append('local', value);
    setSearchParams(searchParams);
  };

  const deleteQuery = (value: string) => {
    searchParams.delete('local');
    queries
      .filter(query => query !== value)
      .forEach(query => searchParams.append('local', query));
    setSearchParams(searchParams);
  };

  return { queries, addQuery, deleteQuery };
}

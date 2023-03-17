import { useParams, useSearchParams } from 'react-router-dom';

export default function useFilter() {
  const [params, setParams] = useSearchParams();
  const currentParam = params.get('filter');

  const pushParams = (filter: string) => {
    if (!filter) return setParams({ filter: '전체' });

    setParams({ filter });
  };

  return { currentParam, pushParams };
}

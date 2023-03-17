import { useSearchParams } from 'react-router-dom';

export default function useFilter() {
  const [params, setParams] = useSearchParams();
  const pushParams = (filter: string) => {
    const currentParam = params.get('filter') || '';
    if (currentParam === filter) return setParams({});

    setParams({ filter });
  };

  return pushParams;
}

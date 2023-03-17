import { useParams, useSearchParams } from 'react-router-dom';

export default function useFilter() {
  const [params, setParams] = useSearchParams();
  const currentParam = params.get('filter');
  console.log(currentParam);
  const pushParams = (filter: string) => {
    console.log(currentParam, filter);

    if (currentParam === filter) return setParams({ a: '1' });

    setParams({ filter });
  };

  return pushParams;
}

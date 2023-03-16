import useMockList from '../hooks/useMockList';
import useFilterList from './../hooks/useFilterList';
import Button from './common/Button';
import { MouseEvent } from 'react';
import styled from 'styled-components';

const ChartFilter = () => {
  const { idList } = useMockList();
  const { currentFilter, setFilter } = useFilterList('id');

  const idSet = ['전지역', ...new Set(idList)];

  const onClickHandler = (e: MouseEvent<HTMLElement>) => {
    const name = (e.target as HTMLElement).getAttribute('name') as string;
    setFilter(name);
  };

  return (
    <ChartFilterWrapper>
      {idSet.map((id, idx) => (
        <Button
          key={idx}
          value={id}
          onClickHandler={onClickHandler}
          isActive={currentFilter ? id === currentFilter : !idx}
        />
      ))}
    </ChartFilterWrapper>
  );
};

const ChartFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 40px 0 8px;
`;

export default ChartFilter;

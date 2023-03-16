import useMockList from '../hooks/useMockList';
import FilterButton from './FilterButton';
import React from 'react';
import styled from 'styled-components';

export default function ChartFilter() {
  const { idList } = useMockList();
  const uniqueIdList = [...new Set(idList)];
  return (
    <Ul>
      {uniqueIdList.map(id => (
        <FilterButton key={id} id={id} />
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  width: 100%;
  display: inline-flex;
  justify-content: center;
`;

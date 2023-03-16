import { useFilter } from '../hooks/useFilter';
import useMockList from '../hooks/useMockList';
import React from 'react';
import styled from 'styled-components';

const ChartFilter = () => {
  const { idList } = useMockList();
  const [filter, addFilter, deleteFilter] = useFilter();
  const ids = Array.from(new Set(idList));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    if (checked === true) {
      addFilter(value);
    } else {
      deleteFilter(value);
    }
  };

  return (
    <Container>
      {ids.map((id, index) => {
        return (
          <CheckBoxWrapper key={index}>
            <CheckBox
              checked={filter.includes(id)}
              key={index}
              type='checkbox'
              value={id}
              onChange={handleChange}
            />
            {id}
          </CheckBoxWrapper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
`;
const CheckBoxWrapper = styled.span`
  margin: 0.1rem;
  padding: 0.1rem;
  color: black;
  border: solid 1px skyblue;
`;
const CheckBox = styled.input`
  text-align: center;
  font-size: 5rem;
  font-style: italic;
  color: black;
  font-weight: bold;
`;
export { ChartFilter };

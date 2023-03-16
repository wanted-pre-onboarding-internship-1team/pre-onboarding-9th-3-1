import useParam from '../hooks/useParam';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function FilterButton({ id }: { id: string }) {
  const navigator = useNavigate();
  const filter = useParam('filter');
  return (
    <li>
      <Button
        isSelected={filter === id}
        onClick={() => navigator(`/?filter=${id}`)}>
        {id}
      </Button>
    </li>
  );
}

const Button = styled.button<{ isSelected: boolean }>`
  all: unset;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #868686;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  background: ${({ isSelected }) => (isSelected ? '#eee3e3' : 'white')};
  &:hover {
    background-color: #eee3e3;
  }
`;

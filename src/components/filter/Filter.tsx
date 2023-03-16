import useMockList from '../../hooks/useMockList';
import useQuerystring from '../../hooks/useQuerystring';
import React from 'react';
import styled from 'styled-components';

interface ButtonContainerProps {
  isFilterOpen?: boolean;
  checked?: boolean;
}

export default function Filter({
  isFilterOpen,
}: {
  setCurrentLocal: React.Dispatch<React.SetStateAction<string>>;
  isFilterOpen: boolean;
}) {
  const { idList } = useMockList();
  const localList = [...new Set(idList)];
  const { queries, addQuery, deleteQuery } = useQuerystring();

  const handleFilterButton = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, checked } = e.currentTarget;
    checked ? addQuery(value) : deleteQuery(value);
  };

  return (
    <ButtonContainer isFilterOpen={isFilterOpen}>
      <FilterButtonUl>
        {localList.map((local, idx) => {
          return (
            <FilterButtonLi key={idx}>
              <FilterButton
                id={local}
                type='checkbox'
                value={local}
                checked={queries.includes(local)}
                onChange={e => handleFilterButton(e, idx)}
              />
              <FilterLabel htmlFor={local} checked={queries.includes(local)}>
                {local}
              </FilterLabel>
            </FilterButtonLi>
          );
        })}
      </FilterButtonUl>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: ${({ isFilterOpen }) => {
    return isFilterOpen ? 'true' : 'none';
  }};
  position: absolute;
  top: -30px;
  right: 170px;
  background-color: ${({ isFilterOpen }) => {
    return isFilterOpen && '#d0e8f2';
  }};
  border-radius: ${({ isFilterOpen }) => {
    return isFilterOpen && '10px';
  }};
`;
const FilterButtonUl = styled.ul``;
const FilterButtonLi = styled.li`
  border-inline: none;
  display: inline-block;
  margin: 7px;
  padding: 5px;
`;
const FilterButton = styled.input`
  display: none;
  text-align: center;
`;
const FilterLabel = styled.label<ButtonContainerProps>`
  font-size: 13px;
  cursor: pointer;
  background-color: ${({ checked }) => {
    return checked && 'white';
  }};
  border-radius: ${({ checked }) => {
    return checked && '5px';
  }};
`;

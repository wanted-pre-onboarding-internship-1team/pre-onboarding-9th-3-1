import useMockList from '../../hooks/useMockList';
import useQuerystring from '../../hooks/useQuerystring';
import { StyleProps } from './types/StyleProps';
import React from 'react';
import styled from 'styled-components';

export default function Filter({ isFilterOpen }: { isFilterOpen: boolean }) {
  const { idList } = useMockList();
  const { queries, addQuery, deleteQuery } = useQuerystring();

  const localList = [...new Set(idList)];

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

const ButtonContainer = styled.div<StyleProps>`
  display: ${({ isFilterOpen }) => {
    return isFilterOpen ? 'true' : 'none';
  }};
  position: absolute;
  top: -65px;
  right: 10px;
  background-color: ${({ isFilterOpen }) => {
    return isFilterOpen && '#d0e8f2';
  }};
  border-radius: ${({ isFilterOpen }) => {
    return isFilterOpen && '10px';
  }};

  &:after {
    border-top: 15px solid #d0e8f2;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 50px;
    left: 160px;
  }
`;
const FilterButtonUl = styled.ul``;
const FilterButtonLi = styled.li`
  border-inline: none;
  display: inline-block;
  margin: 7px;
  padding: 10px 5px;
`;
const FilterButton = styled.input`
  display: none;
  text-align: center;
`;
const FilterLabel = styled.label<StyleProps>`
  font-size: 13px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: ${({ checked }) => {
    return checked && 'white';
  }};
  border-radius: ${({ checked }) => {
    return checked && '5px';
  }};
`;

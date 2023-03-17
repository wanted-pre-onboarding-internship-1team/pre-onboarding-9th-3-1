import useMockList from '../hooks/useMockList';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function ChartFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { location } = useMockList();

  const handleFilter = (id: string) => {
    const currentParams = searchParams.get('id');
    if (currentParams === id) {
      setSearchParams();
      return;
    }
    setSearchParams({ ...searchParams, id: id });
  };
  return (
    <FilterBar>
      <FilterBtn onClick={() => setSearchParams('')}>전체</FilterBtn>
      {location.map((id, idx) => (
        <FilterBtn key={idx} onClick={() => handleFilter(id)}>
          {id}
        </FilterBtn>
      ))}
    </FilterBar>
  );
}

const FilterBar = styled.div`
  display: flex;
`;
const FilterBtn = styled.button`
  align-items: center;
  background-clip: padding-box;
  background-color: #99c2a2;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, 'Helvetica Neue', Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;

  :hover,
  :focus {
    background-color: #c8f5d1;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  }

  :hover {
    transform: translateY(-1px);
    color: gray;
  }

  :active {
    background-color: #c8f5d1;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    transform: translateY(0);
  }
`;

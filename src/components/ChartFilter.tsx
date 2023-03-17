import useFilter from '../hooks/useFilter';
import useMockList from '../hooks/useMockList';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

export default function ChartFilter() {
  const { idList } = useMockList();
  const { currentParam, pushParams } = useFilter();
  const keys = new Set(idList);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    pushParams(value);
  };

  return (
    <Container>
      {['전체', ...keys].map(item => (
        <CheckBox key={item}>
          <InputBox
            type='radio'
            id={item}
            name='filter'
            onChange={onChange}
            value={item}
            checked={currentParam === item}
          />
          <Label htmlFor={item}>{item}</Label>
        </CheckBox>
      ))}
    </Container>
  );
}

const Container = styled.nav`
  display: flex;
  gap: 1rem;
`;

const CheckBox = styled.div`
  border: 1px solid #60f391;
  border-radius: 1rem;
  overflow: hidden;
  & > input[type='radio']:checked + label {
    background: #60f391;
    color: white;
  }
`;

const InputBox = styled.input`
  display: none;
  cursor: pointer;
`;

const Label = styled.label`
  padding: 0.6rem 0.8rem;
  display: block;
  cursor: pointer;
`;

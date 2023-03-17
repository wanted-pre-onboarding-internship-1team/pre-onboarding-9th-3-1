import useFilter from '../hooks/useFilter';
import useMockList from '../hooks/useMockList';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

export default function ChartFilter() {
  const { idList } = useMockList();
  const pushParams = useFilter();
  const keys = new Set(idList);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log(checked);

    pushParams(value);
  };

  return (
    <Container>
      <CheckBox>
        <InputBox
          type='radio'
          id={'전체'}
          name='filter'
          onChange={onChange}
          value={'전체'}
        />
        <Label htmlFor={'전체'}>{'전체'}</Label>
      </CheckBox>
      {[...keys].map(item => (
        <CheckBox key={item}>
          <InputBox
            type='radio'
            id={item}
            name='filter'
            onChange={onChange}
            value={item}
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
  padding: 0.6rem 0.8rem;
  border-radius: 1rem;

  & > input[type='radio']:checked & {
    background: #60f391;
    color: blue;
  }
`;

const InputBox = styled.input`
  display: none;
  cursor: pointer;
`;

const Label = styled.label`
  cursor: pointer;
`;

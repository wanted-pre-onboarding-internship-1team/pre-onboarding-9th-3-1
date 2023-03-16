import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  value: string;
  isActive: boolean;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ value, isActive, onClickHandler }: ButtonProps) => {
  return (
    <Btn onClick={onClickHandler} name={value} isActive={isActive}>
      {value}
    </Btn>
  );
};

const Btn = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;

  background-color: ${({ isActive }) => {
    return isActive ? '#6c998b' : '#74d3a3';
  }};

  &:hover {
    background-color: #6c998b;
  }
`;

export default Button;

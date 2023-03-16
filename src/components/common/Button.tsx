import { BUTTON_COLOR } from '../../constants/colors';
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
  color: ${BUTTON_COLOR.textLight};
  cursor: pointer;

  background-color: ${({ isActive }) => {
    return isActive ? BUTTON_COLOR.active : BUTTON_COLOR.default;
  }};

  &:hover {
    background-color: ${BUTTON_COLOR.active};
  }
`;

export default Button;

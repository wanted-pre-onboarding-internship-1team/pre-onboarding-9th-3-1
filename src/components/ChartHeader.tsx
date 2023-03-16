import { COMMON_COLOR } from './../constants/colors';
import styled from 'styled-components';

export default function ChartHeader() {
  return (
    <Header>
      <H1>Flexsys</H1>
      <SubTitle>현황 그래프</SubTitle>
    </Header>
  );
}

const Header = styled.header`
  position: relative;
`;

const H1 = styled.h1`
  line-height: 1.3em;
  font-size: 5rem;
  font-style: italic;
  color: ${COMMON_COLOR.title};
  font-weight: bold;
`;

const SubTitle = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 1.6rem;
  font-weight: bold;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  color: ${COMMON_COLOR.subTitle};
  white-space: nowrap;
`;

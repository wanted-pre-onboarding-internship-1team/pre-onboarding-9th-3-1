import styled from 'styled-components';

export default function ChartHeader() {
  return (
    <Header>
      <H1>Flexsys</H1>
      <SubTitle>2022년 2월 1일</SubTitle>
    </Header>
  );
}

const Header = styled.header`
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 5rem;
  font-style: italic;
  color: #abfcc689;
  font-weight: bold;
`;

const SubTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  color: #98989883;
`;

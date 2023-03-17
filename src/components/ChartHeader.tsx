import { useDataIDContext } from '../contexts/DataContext';
import styled from 'styled-components';

export default function ChartHeader() {
  const { setSelectID, idSet } = useDataIDContext();
  return (
    <Header>
      <H1>Flexsys</H1>
      <SubTitle>현황 그래프</SubTitle>
      {Array.from(idSet).map(id => {
        return (
          <button
            key={id}
            onClick={() => {
              setSelectID && setSelectID(id);
            }}>
            {id}
          </button>
        );
      })}
    </Header>
  );
}

const Header = styled.header`
  position: relative;
`;

const H1 = styled.h1`
  font-size: 5rem;
  font-style: italic;
  color: #abfcc689;
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
  color: #98989883;
`;

import { useDataIDContext } from '../contexts/DataContext';
import styled from 'styled-components';

export default function IDSelectButtons() {
  const { setSelectID, idSet } = useDataIDContext();
  const handleClick = (id: string) => {
    setSelectID && setSelectID(id);
  };
  return (
    <ButtonArea>
      {Array.from(idSet).map(id => {
        return (
          <button key={id} onClick={() => handleClick(id)}>
            {id}
          </button>
        );
      })}
    </ButtonArea>
  );
}

const ButtonArea = styled.div`
  position: absolute;
  bottom: -20px;
  z-index: 10;
`;

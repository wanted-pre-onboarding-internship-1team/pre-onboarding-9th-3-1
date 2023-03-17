import { useDataIDContext } from '../contexts/DataContext';

export default function IDSelectButtons() {
  const { setSelectID, idSet } = useDataIDContext();
  const handleClick = (id: string) => {
    setSelectID && setSelectID(id);
  };
  return (
    <>
      {Array.from(idSet).map(id => {
        return (
          <button key={id} onClick={() => handleClick(id)}>
            {id}
          </button>
        );
      })}
    </>
  );
}

import { useDataValueContext } from '../contexts/DataContext';
import { TooltipProps } from '../interface/Tooltip';

export default function Tooltip({ opt }: TooltipProps) {
  const { timeList, idList, barValueList, areaValueList } =
    useDataValueContext();
  const index = opt.dataPointIndex;

  return (
    <ul className='arrow-box'>
      <li className='arrow-box__item'>${timeList[index]}</li>
      <li className='arrow-box__item'>
        <div
          style={{
            background: `${opt.w.globals.colors[0]}`,
            width: '10px',
            height: '10px',
            borderRadius: '10px',
          }}
        />
        <div>bar: </div>
        <div>${barValueList[index]}</div>
      </li>
      <li className='arrow-box__item'>
        <div
          style={{
            background: `${opt.w.globals.colors[1]}`,
            width: '10px',
            height: '10px',
            borderRadius: '10px',
          }}
        />
        <div>area: </div>
        <div>${areaValueList[index]}</div>
      </li>
      <li className='arrow-box__item'>
        <div>지역: </div>
        <div>${idList[index]}</div>
      </li>
    </ul>
  );
}

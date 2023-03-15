import { TooltipProps } from 'recharts';
import styled from 'styled-components';

export default function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>): JSX.Element | null {
  if (active && payload) {
    return (
      <Tooltip>
        <div className='custom-tooltip'>
          <h2 className='label'>{`${payload[0].payload.id}`}</h2>
          <h2 className='label'>{`${label}`}</h2>
          <p className='value value_bar'>{`value_bar : ${payload[0].payload.value_bar}`}</p>
          <p className='value value_area'>{`value_area : ${payload[0].payload.value_area}`}</p>
        </div>
      </Tooltip>
    );
  }
  return null;
}

const Tooltip = styled.div`
  .custom-tooltip {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
		align-items: center;
  }
  .label:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
  .value {
		display: flex;
    justify-content:: flex-start;
		&.value_bar {
			font-weight: bold;
		}
		&.value_area{
			color: #223f96;
			font-weight: bold;
		}
  }
`;

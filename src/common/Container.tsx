import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};
export default function Container({ children }: WrapperProps) {
  return (
    <Wrapper>
      <ChartTitle> 2023년 2월 1일 분단위 서울 혼잡도</ChartTitle>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
  background-color: #000307;
`;
const ChartTitle = styled.div`
  color: #fff;
  font: small-caps bold 24px/1 sans-serif;
  margin-bottom: 50px;
`;

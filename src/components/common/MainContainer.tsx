import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = () => {
  return (
    <MainWrapper>
      <Title>Flexsys</Title>
      <MainSection>
        <Outlet />
      </MainSection>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  background-color: #eceef2;
`;

const MainSection = styled.section`
  width: calc(100% - 40px);
  max-width: 1000px;
  height: 700px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 20px #5b47bc4b;
`;

const Title = styled.h1`
  color: #728de6;
  font-size: 50px;
  font-weight: bold;
`;

export default MainContainer;

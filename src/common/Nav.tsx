import styled from 'styled-components';

export default function Navbar() {
  return (
    <Nav>
      <Title>
        <img
          id='titleImg'
          src={process.env.PUBLIC_URL + '/img/title.png'}
          alt='titleImg'
        />
      </Title>
    </Nav>
  );
}

const Nav = styled.div`
  border-bottom: 2px solid #888;
  background-color: #000307;
`;
const Title = styled.div`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
  #titleImg {
    width: 150px;
  }
`;

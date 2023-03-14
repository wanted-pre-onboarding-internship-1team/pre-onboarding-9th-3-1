import { DataProvider } from './contexts/DataContext';
import Router from './router/router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

    * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <DataProvider>
      <GlobalStyle />
      <Router />
    </DataProvider>
  );
}

export default App;

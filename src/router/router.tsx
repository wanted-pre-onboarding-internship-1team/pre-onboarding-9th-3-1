import MainContainer from '../components/common/MainContainer';
import Mainpage from '../pages/Mainpage';
import { Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route element={<MainContainer />}>
        <Route path='/' element={<Mainpage />} />
      </Route>
    </Routes>
  );
}

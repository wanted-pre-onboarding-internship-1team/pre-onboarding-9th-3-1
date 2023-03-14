import Mainpage from '../pages/Mainpage';
import { Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
    </Routes>
  );
}

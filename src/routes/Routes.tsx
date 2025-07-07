import { Routes, Route } from 'react-router-dom';
import Home from '../modules/home/pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes;

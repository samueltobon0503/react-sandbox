import { Navigate, Route, Routes } from 'react-router';
import { useContext } from 'react';

import { Loginpage } from '../auth/pages/LoginPage';
import { HomePage } from '../components/Homepage';
import { UserContext } from '../auth/contexts/User.Context';

export const AppRoutes = () => {
  const { userState: { logged } } = useContext(UserContext);

  if (!logged) {
    return (
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

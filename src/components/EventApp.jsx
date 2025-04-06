import { useContext } from 'react';
import { UserContext } from '../contexts/User.Context';
import { Navigate, Route, Routes } from 'react-router';
import { FoodDish } from './FoodDish';
import { HomePage } from './Homepage';
import { Loginpage } from './LoginPage';

export const EventApp = () => {

  const {user, setUser} = useContext(UserContext);
  return (
      <Routes>
        <Route path='/' element={<Loginpage></Loginpage>}></Route>
        <Route path='/Home' element={<HomePage></HomePage>}></Route>
        <Route path='/*' element={<Navigate to="/" />}></Route>
      </Routes>
  );
}


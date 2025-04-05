import { useContext } from 'react';
import { UserContext } from './contexts/User.Context';
import { Route, Routes } from 'react-router';
import { FoodDish } from './components/FoodDish';
import { HomePage } from './components/Homepage';
import { Loginpage } from './components/LoginPage';

export const EventApp = () => {

  const {user, setUser} = useContext(UserContext);
  return (
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/Login' element={<Loginpage></Loginpage>}></Route>
      </Routes>
  );
}


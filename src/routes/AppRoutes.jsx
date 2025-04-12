import { Navigate, Route, Routes } from 'react-router';
import { Loginpage } from '../auth/pages/LoginPage';
import { HomePage } from '../components/Homepage';


export const AppRoutes = () => {
    return (
        <Routes>
          <Route path='/' element={<Loginpage></Loginpage>}></Route>
          <Route path='/Home' element={<HomePage></HomePage>}></Route>
          <Route path='/*' element={<Navigate to="/" />}></Route>
        </Routes>
    );
}
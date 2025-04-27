import { Navigate, Route, Routes } from 'react-router';
import { Loginpage } from '../auth/pages/LoginPage';
import { HomePage } from '../components/Homepage';
import { UserContext } from '../auth/contexts/User.Context';


export const AppRoutes = () => {

  const { userState: { logged },
  } = UserContext(UserContext);


  if (!logged) {
    return (
      <>
        <Routes>
          <Route path="/Login" element={<Loginpage />} />
        </Routes>
      </>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Loginpage></Loginpage>}></Route>
      <Route path='/Home' element={<HomePage></HomePage>}></Route>
      <Route path='/*' element={<Navigate to="/" />}></Route>
    </Routes>
  );
};

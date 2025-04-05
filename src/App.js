import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/loginPage';
import { ReducerTodoApp } from './components/ReducerTodoApp';
import { FoodDish } from './components/FoodDish';
import { HomePage } from './components/HomePage';

function App() {

  const { user, setUser} = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage></HomePage>}/>
        <Route path='/Login' element={ <LoginPage></LoginPage>}/>
      </Routes>
    </>
  );
}

export default App;

import jhoel from './assets/jhoelnew.png';
import './App.css';
import { useContext } from 'react';
import { UserContext } from './contexts/User.Context';
import { Route, Routes } from 'react-router';
import { FoodDish } from './components/FoodDish';

function App() {

  const {user, setUser} = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header">
        <img src={jhoel} className="App-logo" alt="logo" />
      </header>
      <pre>
        {JSON.stringify(user)}
      </pre>
    </div>
  );
}

export default App;

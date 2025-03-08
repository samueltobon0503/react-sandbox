import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoListApp from './components/TodoListApp';
import App from './App';
import { Example } from './components/Example';
import { WindowResize } from './components/WindowResize';
import { FoodDish } from './components/FoodDish';

const jobs = [
  {
      name: "Make the bed",
      minutes: "10"
  },
  {
      name: "Have breakfast",
      minutes: "10"
  },
  {
      name: "Take a shower",
      minutes: "5"
  },
  {
      name: "Get dress",
      minutes: "15"
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App></App> */}
    {/* <TodoListApp jobs={jobs}/> */}
    {/* <Example></Example> */}
    {/* <WindowResize></WindowResize> */}
    <FoodDish></FoodDish>
  </React.StrictMode>
);
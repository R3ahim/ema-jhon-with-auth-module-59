import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Header/Home/Home';
import Login from './components/Login/Login';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
    </div>
  );
};

export default App;
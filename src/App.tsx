import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';


import MainPage from './pages/Main/Main';
import Home from './pages/Home/Home';

function App() {

  // 로그인 되어 있ㄹ으면 홈으로 넘기고 안되어있으면 로그인/회원가입(메인)으로
  return (
    <div className='font-score m-6'>
      <h1 className='text-mainGreen'>부랴부랴</h1>
    <BrowserRouter> 
    <Routes>
      <Route path="/" element= {<MainPage/>}></Route>
      <Route path="/home" element= {<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

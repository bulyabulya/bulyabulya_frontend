import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/tailwind.css';


import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import Login from 'pages/Auth/Login';

function App() {

  // 로그인 되어 있ㄹ으면 홈으로 넘기고 안되어있으면 로그인/회원가입(메인)으로
  return (
    <div className='font-score m-8'>
      <h1 className='text-mainGreen text-xl font-bold mb-8'>부랴부랴</h1>
      
    <BrowserRouter> 
    <Routes>
      <Route path="/" element= {<Main/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
      <Route path="/home" element= {<Home/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;

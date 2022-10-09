import React from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './styles/tailwind.css';

import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import Login from 'pages/Auth/Login';

function App() {
  const navigate = useNavigate();

  return (
    <div className='font-score m-8'>
      <h1 className='text-mainGreen text-xl font-bold mb-8' onClick={() => {navigate("/home")}}>부랴부랴</h1>
      
    <Routes>
      <Route path="/" element= {<Main/>}></Route>
      <Route path="/login" element= {<Login/>}></Route>
      <Route path="/home" element= {<Home/>}></Route>
    </Routes>
    </div>

  );
}

export default App;

import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './styles/tailwind.css';
import Main from './pages/Main/Main';
import Home from './pages/Home/Home';
import AddInfo from 'pages/Add/AddInfo';
import SelectPath from 'pages/Add/SelectPath';
import Login from './pages/Auth/Login';
import Join from './pages/Auth/Join';
import SetNotice from './pages/Add/SetNotice';
import "./pages/FCM/messaging_get_token";

function App() {
  const navigate = useNavigate();

  return (
    <div className="font-score ml-8 mr-8 mt-8">
      <h1
        className="text-mainGreen text-xl font-bold mb-8"
        onClick={() => {
          navigate('/home');
        }}
      >
        부랴부랴
      </h1>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/addInfo" element={<AddInfo />}></Route>
        <Route path="/selectPath" element={<SelectPath />} />
        <Route path="/setNotice" element={<SetNotice />}></Route>
      </Routes>
    </div>
  );

}

export default App;



import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainPage from './pages/Main/Main';

function App() {

  // 로그인 되어 있ㄹ으면 홈으로 넘기고 안되어있으면 로그인/회원가입(메인)으로
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element= {<MainPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

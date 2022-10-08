import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();
  return (
    <div className = 'flex h-screen'>
      <div className="m-auto text-center text-6xl">
        <img className="mx-auto w-2/3" alt="부랴부랴" src="/assets/character.png" />
        <div className="text-4xl font-bold text-mainGreen">
          부랴부랴
          <br />
        </div>
        <div>
          <button
            className="w-1/2 rounded-md text-2xl outline ouutline-offset-2 outline-2 text-mainGreen"
            onClick={() => navigate('/Login')}
          >
            로그인
          </button>
        </div>
        <div className = 'mb-20'>
          <button
            className="w-1/2 rounded-md text-2xl outline outline-offset-2 outline-2 text-mainGreen"
            onClick={() => navigate('/Join')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
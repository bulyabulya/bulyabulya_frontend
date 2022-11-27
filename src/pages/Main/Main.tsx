import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <div className="flex h-100">
      <div className="my-auto text-center text-6xl">
        <img className="mx-auto w-2/3" alt="부랴부랴" src="/assets/character.png" />
        <div className=" mb-5 text-4xl font-bold text-mainGreen">
          부랴부랴
          <br />
        </div>
        <div className="flex flex-col items-center justify-around w-full h-32">
          <button
            className=" w-40 h-8 rounded-md text-xl outline outline-1 text-mainGreen"
            onClick={() => navigate('/login')}
          >
            로그인
          </button>
          <button
            className=" w-40 h-8 rounded-md text-xl outline outline-1 text-mainGreen"
            onClick={() => navigate('/join')}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;

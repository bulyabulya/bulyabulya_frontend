import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen ">
      <div className="w-full m-auto">
        <div className="text-center mb-4 ">
          <h4 className="ml-12 text-left text-2xl">ID</h4>
          <input
            className="w-4/5 h-10 rounded-md text-left placeholder-#e2e0e0 border-2"
            placeholder="  ID를 입력하세요"
          ></input>
        </div>
        <div className="text-center">
          <h4 className="ml-12 text-left text-2xl">PW</h4>
          <input
            className="w-4/5 h-10 rounded-md text-left placeholder-#e2e0e0 border-2"
            placeholder="  Password를 입력하세요"
          ></input>
        </div>
        <div className="text-center">
          <button
            className="my-5 w-1/4 rounded-md text-2xl outline ouutline-offset-2 outline-2 text-mainGreen"
            onClick={() => navigate('/home')}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}

import { login } from 'api/login';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
  registrationToken: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['accessToken']);
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    registrationToken: localStorage.getItem("registrationToken")!,
  })
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, email: e.target.value})
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value})
  }

  const handleLogin = () =>{
    login(user, setCookie);
  }
  return (
    <div className="flex h-100 ">
      <div className="w-full m-auto">
        <div className="text-center mb-4 ">
          <h4 className="text-left text-lg">Email</h4>
          <input
            className="w-full h-10 pl-2 rounded-md text-left placeholder-grey border border-darkGrey hover:outline-none"
            placeholder="Email을 입력하세요"
            type={'email'}
            onChange={handleEmail}
          ></input>
        </div>
        <div className="text-center">
          <h4 className="text-left text-lg">Password</h4>
          <input
            className="w-full h-10 pl-2 rounded-md text-left placeholder-grey border border-darkGrey hover:outline-none"
            placeholder="Password를 입력하세요"
            type={'password'}
            onChange={handlePassword}
          ></input>
        </div>
        <div className="text-center">
          <button
            className="my-8 w-24 h-8 rounded-sm bg-subGreen text-lg text-white drop-shadow-btn"
            onClick={handleLogin}
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
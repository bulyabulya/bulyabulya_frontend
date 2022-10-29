import React, { useState } from 'react';
import { join } from 'api/join';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  password: string;
}



export default function Join() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [checkEmail, setCheckEmail] = useState<boolean>(false);
  const [checkPwLength, setCheckPwLength] = useState<boolean>(false);
  const [checkPwContain, setCheckPwContain] = useState<boolean>(false);
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: e.target.value });
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    regex.test(e.target.value) === true ? setCheckEmail(true) : setCheckEmail(false);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9]).{1,}$/;
    e.target.value.length > 7 ? setCheckPwLength(true) : setCheckPwLength(false);
    regex.test(e.target.value) === true ? setCheckPwContain(true) : setCheckPwContain(false);
  };
  const handleJoin = () => {
    if (checkEmail && checkPwLength && checkPwContain) {
      join(user);
    }
  }

  return (
    <div className="flex h-100 ">
      <div className="w-full m-auto">
        <div className="text-center mb-4 ">
          <h4 className="text-left text-lg">Email</h4>
          <input
            className="w-full h-10 pl-2 rounded-md text-left font-light placeholder-grey border border-darkGrey hover:outline-none"
            placeholder="Email을 입력하세요"
            type={'email'}
            onChange={changeEmail}
          ></input>
          <p className={`flex w-fit mt-2 text-xs ${checkEmail === true ? 'text-mainGreen' : 'text-grey'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3 h-3 mr-2"
            >
              <path d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            올바른 메일 형식
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-left text-lg">Password</h4>
          <input
            className="w-full h-10 pl-2 rounded-md text-left font-light placeholder-grey border border-darkGrey hover:outline-none"
            placeholder="Password를 입력하세요"
            type={'password'}
            onChange={changePassword}
          ></input>
          <div className='flex'>
          <p className={`flex w-fit mt-2 text-xs ${checkPwLength === true ? 'text-mainGreen' : 'text-grey'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3 h-3 mr-2"
            >
              <path d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            8자 이상
          </p>
          <p className={`flex w-fit mt-2 ml-5 text-xs ${checkPwContain === true ? 'text-mainGreen' : 'text-grey'}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-3 h-3 mr-2"
            >
              <path d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            영문,숫자,특수문자 포함
          </p>
          </div>
        </div>
        <div className="text-center">
          <button
            className="my-8 w-24 h-8 rounded-sm bg-subGreen text-lg text-white drop-shadow-btn "
            onClick={handleJoin}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

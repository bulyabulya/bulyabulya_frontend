import React, {SetStateAction, Dispatch} from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export interface loginRequestBody {
  email: string;
  password: string;
  registrationToken: string; // = FCM
}

export const login = async (loginParams: loginRequestBody, setAccessToken: any, setRefreshToken: any) => {
  console.log('aa');
  axios
    .post('https://web.api.bulyabulya.com/auth/login', loginParams)
    .then((response) => {
      setAccessToken('accessToken',response.data.data.accessToken);
      setRefreshToken('refreshToken',response.data.data.refreshToken);
      window.location.href = '/home';
    })
    .catch((error) => {
      console.log(error);
      alert('로그인에 실패하였습니다.');
    });
};


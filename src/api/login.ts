import axios from 'axios';
import { useCookies } from 'react-cookie';

export interface loginRequestBody {
  email: string;
  password: string;
}
export const login = async (loginParams: loginRequestBody, setCookie: any) => {
  console.log('aa');
  axios
    .post('https://web.api.bulyabulya.com/auth/login', loginParams)
    .then((response) => {
        setCookie('accessToken', response.data.data.accessToken);
        window.location.href = "/home";
    })
    .catch((error) => {
      console.log(error);
      alert('로그인에 실패하였습니다.');
    });
};

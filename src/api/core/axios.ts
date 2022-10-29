import axios, { AxiosRequestConfig } from 'axios';
import { useCookies } from 'react-cookie';

const request = axios.create({
  baseURL: process.env.REACT_APP_WEB_API_URL,
});

const axiosWrap = async ({
  method,
  url,
  params,
  body,
}: {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  params?: object;
  body?: object;
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  try {
    const config: AxiosRequestConfig = {
      baseURL: process.env.REACT_APP_WEB_API_URL,
      params,
      headers: {
        authorization: cookies ? `Bearer ${cookies}` : '',
      },
    };
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {};
    return data;
  } catch (error: any) {
    console.log(error.response.status, error);
    if (error.response.status === 401) {
      removeCookie('accessToken');
      alert('로그인이 유효하지 않습니다.');
      window.location.href = '/';
    }
  }
};

export const GET = (url: string, params?: object) => axiosWrap({ method: 'get', url, params });
export const POST = (url: string, body?: object) => axiosWrap({ method: 'post', url, body });
export const PUT = (url: string, body?: object) => axiosWrap({ method: 'put', url, body });
export const DELETE = (url: string) => axiosWrap({ method: 'delete', url });

export default request;

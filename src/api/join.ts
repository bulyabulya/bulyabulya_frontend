import axios from 'axios';

export interface joinRequestBody {
  email: string;
  password: string;
}

export const join = async (joinParams: joinRequestBody) => {
  axios
    .post('https://web.api.bulyabulya.com/users/join', joinParams)
    .then((response) => {
      console.log(response);
      
    })
    .catch((error) => {
      console.log(error);
      alert("회원가입에 실패하였습니다.")
    });
};

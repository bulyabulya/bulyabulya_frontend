import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Path from './Path';


function SelectPath() {
  const navigate = useNavigate();
  const location = useLocation();
  const recommendRoute = location.state.recommendRoute;
  const [selectedPath, setSelectdPath] = useState<number>(-1);
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);
  useEffect(() => {
    if (!accessToken.accessToken) {
      navigate('/');
    }
    if (recommendRoute === undefined) {
      navigate('/addInfo');
    }
  }, []);

  const handleSelect = (key:number) => {
    setSelectdPath(key);
  }
  const beforePage = () => {
    navigate('/addInfo');
  };
  const nextPage = () => {
    navigate('/setNotice', {state: recommendRoute[selectedPath]});
    
  };

  return (
    <div>
      <h1 className=" text-xl font-medium mb-6">마음에 드는 경로를 선택해주세요!</h1>
      <div>
        {recommendRoute.map((value: any, key: any) => (
          <div key={key} onClick={()=>{handleSelect(key)}}>
            <Path {...value}></Path>
          </div>
        ))}
      </div>

      <div className="flex justify-between mb-6 text-sm">
        <button
          className=" w-20 h-7 bg-grey rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={() => {
            beforePage();
          }}
        >
          이전
        </button>
        <button
          className=" w-20 h-7 bg-mainGreen rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={() => {
            nextPage();
          }}
        >
          알림 설정
        </button>
      </div>
    </div>
  );
}
export default SelectPath;

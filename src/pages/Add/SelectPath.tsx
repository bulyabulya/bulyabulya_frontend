import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from './Path';

function SelectPath() {
  const navigate = useNavigate();

  const pathList = [
    {
      id: 1,
      time: 30,
      detail: '버스(40분)-지하철(60분)',
      note: '최단시간',
    },
    {
      id: 2,
      time: 50,
      detail: '버스(40분)-지하철(60분)',
      note: '최소환승',
    },
    {
      id: 3,
      time: 70,
      detail: '버스(40분)-지하철(60분)',
      note: '',
    },
  ];

  const beforePage = () => {
    // 입력했던 거 같이 렌더링대야함
    navigate('/addInfo');
  };
  const nextPage = () => {
    // 자료 입력 (저장) 같이
    navigate('/setNotice');
  };

  return (
    <div>
      <h1 className=" text-xl font-medium mb-6">마음에 드는 경로를 선택해주세요!</h1>
      <div>
        {pathList.map((vlaue, key) => (
          <Path key={key} {...vlaue}></Path>
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

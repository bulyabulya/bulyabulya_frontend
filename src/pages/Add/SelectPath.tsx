import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from './Path';

function SelectPath() {
  const navigate = useNavigate();

  const pathList = [
    {
      id: 14,
      origin: "테스트",
      originLatitude: "37.01",
      originLongitude: "37.02",
      destination: "도착지",
      destinationLatitude: "38.01",
      destinationLongitude: "38.02",
      departureTime: "1970-01-01T00:00:02.000Z",
      arrivalTime: "1970-01-01T00:00:02.000Z",
      beforeAlarm: 30,
      alarmTime: "2018-05-24",
      path: "123123123",
      type: "example"
    },
    {
      id: 15,
      origin: "테스트",
      originLatitude: "37.01",
      originLongitude: "37.02",
      destination: "도착지",
      destinationLatitude: "38.01",
      destinationLongitude: "38.02",
      departureTime: "1970-01-01T00:00:02.000Z",
      arrivalTime: "1970-01-01T00:00:02.000Z",
      beforeAlarm: 30,
      alarmTime: "2018-05-24",
      path: "123123123",
      type: "example"
    },
    {
      id: 16,
      origin: "테스트",
      originLatitude: "37.01",
      originLongitude: "37.02",
      destination: "도착지",
      destinationLatitude: "38.01",
      destinationLongitude: "38.02",
      departureTime: "1970-01-01T00:00:02.000Z",
      arrivalTime: "1970-01-01T00:00:02.000Z",
      beforeAlarm: 30,
      alarmTime: "2018-05-24",
      path: "123123123",
      type: "example"
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
        {pathList.map((value, key) => (
          <Path key={key} {...value}></Path>
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

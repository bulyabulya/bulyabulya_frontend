import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddInfo() {
  const navigate = useNavigate();

  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const timezoneDate = new Date(Date.now() - timezoneOffset).toISOString().slice(0, 16);

  const [scheduleName, setScheduleName] = useState<string>('');
  const [origin, setOrigin] = useState<{
    name: string;
    coordinate: string;
  }>();
  const [destination, setDestination] = useState<{
    name: string;
    coordinate: string;
  }>();
  const [arrivalTime, setArrivalTime] = useState<string>(timezoneDate);

  return (
    <div className=" h-100 flex flex-col justify-between">
      <div>
        <input
          className=" text-xl border-none focus:outline-none mb-6"
          placeholder="일정명을 입력하세요"
          value={scheduleName}
          onChange={(event) => {
            setScheduleName(event.target.value);
          }}
        ></input>
        <p className=" text-base font-medium mb-2">출발지</p>
        <input
          className=" w-full text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none"
          placeholder="출발지"
        />
        <p className=" text-base font-medium mb-2">도착지</p>
        <input
          className=" w-full text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none"
          placeholder="도착지"
        />
        <p className=" text-base font-medium mb-2">도착 시간</p>
        <input
          className=" w-full text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none"
          placeholder="도착시간"
          type="datetime-local"
          value={arrivalTime}
          min={timezoneDate}
          onChange={(event) => {
            setArrivalTime(event.target.value);
          }}
        ></input>
      </div>
      <div className="flex justify-between mb-6 text-sm">
        <button
          className=" w-20 h-7 bg-grey rounded-sm text-white drop-shadow-btn"
          onClick={() => {
            navigate('/home');
          }}
        >
          취소
        </button>
        <button
          className=" w-20 h-7 bg-mainGreen rounded-sm text-white drop-shadow-btn"
          onClick={() => {
            navigate('/home');
          }}
        >
          경로 선택
        </button>
      </div>
    </div>
  );
}
export default AddInfo;

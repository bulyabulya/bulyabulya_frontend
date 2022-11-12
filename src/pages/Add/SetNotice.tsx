import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OptDay from '../../components/selectDay';
import OptTime from '../../components/selectTime';
import CheckDay from '../../components/CheckDay';
import { time } from 'console';

export default function SetNotice() {
  const navigate = useNavigate();

  type Timetype = {
    departure: string;
    required: string;
    arrive: string;
  };

  const timeInfo: Timetype = {
    departure: '2022.09.28 오후 2:00',
    required: '60분',
    arrive: '오후 3:00',
  };

  return (
    <div className="h-100 flex flex-col justify-between">
      <div>
        <p>
          <span className="text-mainGreen font-bold">{timeInfo.departure}</span>에 출발하면{' '}
          <span className="text-mainGreen font-bold">{timeInfo.required}</span> 후,{' '}
        </p>
        <p className = 'mb-6'>
          <span className="text-mainGreen font-bold">{timeInfo.arrive}</span>에 도착할 수 있어요!
        </p>
        <OptTime />
        <CheckDay />
      </div>
      <div className="flex justify-between mb-6 text-sm">
        <button
          className="w-20 h-7 bg-grey rounded-sm text-white drop-shadow-btn transfrom transition hover:scale-110 duration-100"
          onClick={() => navigate('/selectPath')}
        >
          이전
        </button>
        <button
          className="w-20 h-7 bg-mainGreen rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={() => navigate('/nogo!!')}
        >
          완료
        </button>
      </div>
    </div>
  );
}
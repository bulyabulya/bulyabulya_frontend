import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';
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
    <div className="">
      <p className = 'text-2xl mb-5'>
        <span className="text-mainGreen font-bold">{timeInfo.departure}</span>에 출발하면{' '}
        <span className="text-mainGreen font-bold">{timeInfo.required}</span> 후,{' '}
        <span className="text-mainGreen font-bold">{timeInfo.arrive}</span>에 도착할 수 있어요!
      </p>
      <OptTime />
      <CheckDay />
      <div>
        <button
          className="float-left my-5 w-1/4 rounded-md text-2xl outline ouutline-offset-2 outline-2 bg-grey text-white"
          onClick={() => navigate('/selectPath')}
        >
          이전
        </button>
        <button
          className="float-right my-5 w-1/4 rounded-md text-2xl outline ouutline-offset-2 outline-2 bg-mainGreen text-white"
          onClick={() => navigate('/nogo!!')}
        >
          완료
        </button>
      </div>
    </div>
  );
}

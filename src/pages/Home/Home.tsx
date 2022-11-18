import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Schedule from './Schedule';
import ScheduleMenu from './ScheduleMenu';

function Home() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const close = () => {
    setMenuOpen(false);
  };

  const scheduleList = [
    {
      title: '집',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '도착지1',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1665320694',
      arrivalTime: '312321321321412',
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
    {
      title: '학교',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '도착지2',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1665320694',
      arrivalTime: '312321321321412',
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
    {
      title: '여행',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '도착지3',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1665320694',
      arrivalTime: '312321321321412',
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
  ];

  return (
    <div className="w-full h-full">
      <button className="w-7 h-7 text-grey font-black text-2xl absolute top-8 right-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />{' '}
        </svg>
      </button>
      <div className=" mb-20">
        {scheduleList.map((value, key) => (
          <Schedule key={key} schedule={value} setMenuOpen={setMenuOpen}></Schedule>
        ))}
      </div>
      <button
        className=" w-full h-12 fixed bottom-0 left-0 bg-mainGreen text-white font-light "
        onClick={() => {
          navigate('/addInfo');
        }}
      >
        일정 추가
      </button>
      {menuOpen && <ScheduleMenu menuOpen={menuOpen} close={close} />}
    </div>
  );
}
export default Home;
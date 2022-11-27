import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Schedule from './Schedule';
import ScheduleMenu from './ScheduleMenu';

function Home() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);


  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const close = () => {
    setMenuOpen(false);
  };
  const scheduleList = [
    {
      title: '아들 보러 가는 길',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '종석의 삐까뻔쩍 집',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1668733440',  // (2022-11-18 10:04)
      arrivalTime: '1668857400', // (2022-11-19 20:30)
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
    {
      title: '파주 귀성길',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '정제의 머나먼 허름 파주집',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1668745620',  // (2022-11-18 13:27)
      arrivalTime: '1668771000', // (2022-11-18 20:30)
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
    {
      title: '행복한 하교',
      origin: '테스트',
      originLatitude: '37.01',
      originLongitude: '37.02',
      destination: '정우의 엎어지면 코 닿는 집',
      destinationLatitude: '38.01',
      destinationLongitude: '38.02',
      departureTime: '1668819840',  // (2022-11-19 10:04)
      arrivalTime: '1669177620',// (2022-11-23 13:27)
      beforeAlarm: 30,
      path: '123123123',
      type: 'example',
    },
  ];

  useEffect(() => {
    if (!accessToken.accessToken) {
      navigate('/');
    }
  }, []);

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
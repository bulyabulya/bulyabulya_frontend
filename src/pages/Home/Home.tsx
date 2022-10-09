import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Schedule from './Schedule';
import ScheduleMenu from './ScheduleMenu';

function Home() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const close = () => {
    setMenuOpen(false);
  }

  const scheduleList = [
    {
      id: 1,
      name: '학교가는 날~',
      date: '9월 8일 12시 30분',
      place: '동국대학교 신공학관',
    },
    {
      id: 2,
      name: '놀러가는 날',
      date: '9월 12일 12시 30분',
      place: '반포 한강공원',
    },
    {
      id: 3,
      name: '대동제 화끈하게-',
      date: '9월 28일 오후 3시 00분',
      place: '동국대학교',
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
      {
        menuOpen && <ScheduleMenu menuOpen={menuOpen} close={close}/>
      }
    </div>
  );
}
export default Home;

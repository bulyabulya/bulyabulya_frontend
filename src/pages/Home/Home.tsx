import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Schedule from './Schedule';
import ScheduleMenu from './ScheduleMenu';

interface schedule {
  id: number;
  userId: number;
  title: string;
  alarmTime: string;
  arrivalTime: string;
  beforeAlarm: number;
  departureTime: string;
  destination: string;
  destinationLatitude: string;
  destinationLongitude: string;
  origin: string;
  originLatitude: string;
  originLongitude: string;
  isQueued: number;
}

function Home() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);
  const [scheduleList, setScheduleList] = useState<schedule[]>([]);
  const [menuNumber, setMenuNumber] = useState<number>(-1);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const close = () => {
    setMenuNumber(-1);
  };

  const getScheduleList = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WEB_API_URL}/schedule/list`, {
        headers: {
          authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
        },
      });
      setScheduleList(
        [...response.data.data.scheduleList].sort((a, b) => +new Date(a.departureTime) - +new Date(b.departureTime))
      );

      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickSchedule = (key: number) => {
    setMenuNumber(key);
    console.log(key);
  };
  useEffect(() => {
    if (!accessToken.accessToken) {
      navigate('/');
    }
    getScheduleList();
    console.log(scheduleList);
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
          <div
            key={key}
            onClick={() => {
              handleClickSchedule(key);
            }}
          >
            <Schedule schedule={value}></Schedule>
          </div>
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
      {/* {menuOpen && <ScheduleMenu menuOpen={menuOpen} close={close} />} */}
      {menuNumber !== -1 && (
        <ScheduleMenu
          id={scheduleList[menuNumber].id}
          title={scheduleList[menuNumber].title}
          origin={scheduleList[menuNumber].origin}
          destination={scheduleList[menuNumber].destination}
          time={scheduleList[menuNumber].arrivalTime}
          close={close}
        />
      )}
    </div>
  );
}
export default Home;

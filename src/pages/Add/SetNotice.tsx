import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SelectTime from '../../components/SelectTime';
import getDepart from '../../components/getDepart';
import getArrival from 'components/getArrival';
import axios from 'axios';
import { ScheduleInformation } from 'store/atom';
import { useRecoilValue } from 'recoil';
import { useCookies } from 'react-cookie';

export default function SetNotice() {
  const location = useLocation();
  const recommendRoute = location.state;
  const [selectTimeOpen, setSelectTimeOpen] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<number>(10);
  const navigate = useNavigate();
  const information = useRecoilValue(ScheduleInformation);
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);

  useEffect(() => {
    if (!accessToken.accessToken) {
      navigate('/');
    }
  }, []);
  const next = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_WEB_API_URL}/schedule`,
        {
          title: information.scheduleName,
          origin: information.origin,
          originLatitude: information.originLatitude,
          originLongitude: information.originLongitude,
          destination: information.destination,
          destinationLatitude: information.destinationLatitude,
          destinationLongitude: information.destinationLongitude,
          departureTime: recommendRoute.departure_time.value + '000',
          arrivalTime: recommendRoute.arrival_time.value + '000',
          beforeAlarm: selectedTime,
          path: JSON.stringify(recommendRoute),
          type: 'RECOMMEND',
        },
        {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
          },
        }
      );
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-100 flex flex-col justify-between">
      <div>
        <div className="text-xl mb-5">
          <p>
            <span className="text-mainGreen font-medium">{getDepart(recommendRoute.departure_time.value)}</span>에
            출발하면
            <br />
            <span className="text-mainGreen font-medium">{recommendRoute.duration.text}</span> 후,{' '}
            <span className="text-mainGreen font-medium">{getArrival(recommendRoute.arrival_time.value)}</span>에 도착할
            수 있어요!
          </p>
        </div>

        <div className="flex mt-10 text-xl">
          <div
            className={`flex justify-between w-16 px-2 py-1 border border-grey ${
              selectTimeOpen ? 'border-b-0 rounded-t-lg' : 'rounded-lg'
            }`}
            onClick={() => setSelectTimeOpen(!selectTimeOpen)}
          >
            {selectedTime}
            {selectTimeOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-6"
              >
                <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            )}
          </div>
          <p className="ml-2 py-1">분 전에 알림을 받아요!</p>
        </div>
        {selectTimeOpen && <SelectTime setSelectTimeOpen={setSelectTimeOpen} setSelectedTime={setSelectedTime} />}
      </div>

      <div className="flex justify-between mb-6 text-sm">
        <button
          className="w-20 h-7 bg-grey rounded-sm text-white drop-shadow-btn transfrom transition hover:scale-110 duration-100"
          onClick={() => navigate('/addInfo')}
        >
          이전
        </button>
        <button
          className="w-20 h-7 bg-mainGreen rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={next}
        >
          완료
        </button>
      </div>
    </div>
  );
}

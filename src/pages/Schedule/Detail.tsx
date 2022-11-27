import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import getDate from 'components/getDate';

interface Ischedule {
  id: number;
  origin: string;
  destination: string;
  originLatitude: string;
  originLongitude: string;
  destinationLatitude: string;
  destinationLongitude: string;
  departureTime: string;
  arrivalTime: string;
  beforeAlarm: number;
  alarmTime: string;
  path: string;
  type: string;
}
interface Istep {
  travel_mode: string;
  duration: { text: string; value: number };
  transit_details: any;
}
interface Ipath {
  departure_time: { text: string; value: number };
  arrival_time: { text: string; value: number };
  duration: { text: string; value: number };
  steps: Array<Istep>;
  end_address: string;
  start_address: string;
}

function Detail() {
  const id = useParams().id;
  
  const [schedule, setSchedule] = React.useState<Ischedule>({
    id: 0,
    origin: '',
    destination: '',
    originLatitude: '',
    originLongitude: '',
    destinationLatitude: '',
    destinationLongitude: '',
    departureTime: '',
    arrivalTime: '',
    beforeAlarm: 0,
    alarmTime: '',
    path: '',
    type: '',
  });
  const [path, setPath] = useState<Ipath>({
    departure_time: { text: '', value: 0 },
    arrival_time: { text: '', value: 0 },
    duration: { text: '', value: 0 },
    end_address: '',
    start_address: '',
    steps: [],
  });
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);

  const getSchedule = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WEB_API_URL}/schedule/detail/${id}`, {
        headers: {
          authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
        },
      });
      setPath(JSON.parse(response.data.data.path));
      setSchedule(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSchedule();
  }, []);
  return (
    <div>
      <div>
        <p className="text-xl text-lightBlack font-normal mb-5 ">
          <span className=" text-mainGreen  font-medium">{schedule.origin}</span> 에서{' '}
          <span className="text-mainGreen font-medium">{schedule.destination}</span> (으)로
          <br />
          <span className="text-mainGreen font-medium">{getDate(schedule.arrivalTime)}</span>까지 가는 길을
          알려드릴게요!
        </p>
      </div>
      <div className='w-100 h-auto rounded-lg drop-shadow-3xl bg-lightGrey p-5'>
        <div className="flex justify-between  font-light text-lg">
          <p className="text-lightBlack">
            {path.departure_time.text} ~ {path.arrival_time.text}
          </p>
          <p className="text-darkGrey">{path.duration.text}</p>
        </div>

        {path.steps.map((value: Istep, key: number) => (
          <div key={key}>
            <p className="text-lightBlack">{value.travel_mode}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Detail;

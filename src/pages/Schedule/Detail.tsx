import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import getDate from 'components/getDate';
import Subway from 'components/Subway';
import SubwayColor from 'components/SubwayColor';
import SubwayLine from 'components/SubwayLine';

interface Ischedule {
  id: number;
  title: string;
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
    title: '',
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
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    getSchedule();
  }, []);
  return (
    <div>
      <div className='mb-3 text-2xl text-lightBlack font-semibold'>{schedule.title}</div>
      <div>
        <p className="text-lg text-lightBlack font-normal mb-5 ">
          <span className=" text-mainGreen  font-medium">{schedule.origin}</span> 에서{' '}
          <span className="text-mainGreen font-medium">{schedule.destination}</span> (으)로
          <br />
          <span className="text-mainGreen font-medium">{getDate(schedule.arrivalTime)}</span>까지 가는 길을
          알려드릴게요!
        </p>
      </div>
      <div className="w-100 h-auto mb-10 rounded-lg drop-shadow-3xl bg-lightGrey p-5">
        <div className="flex justify-between mb-6 text-lg">
          <p className="text-lightBlack font-medium">
            {path.departure_time.text} ~ {path.arrival_time.text}
          </p>
          <p className="text-darkGrey font-light">{path.duration.text}</p>
        </div>

        <div>
          <div className="flex">
            <div className="flex justify-center items-center bg-mainGreen rounded-full w-7 h-7 text-white text-xs">
              출발
            </div>
            <p className="ml-2 mt-0.5 text-base text-lightBlack font-normal "> {schedule.origin}</p>
          </div>
          {path.steps.map((step: Istep, key: number) => (
            <div key={key}>
              {step.travel_mode === 'WALKING' && <div className="bg-darkGrey rounded-full w-0.5 h-6 ml-3 mt-1"> </div>}
              {step.travel_mode === 'WALKING' && (
                <div className="mt-1 flex ">
                  <div className="bg-darkGrey rounded-full w-7 h-7 text-white">
                    <img className="w-7 h-7" alt="부랴부랴" src="/assets/walk.png" />
                  </div>
                  <p className="ml-2 mt-0.5 text-sm text-darkGrey font-light ">{step.duration.text}</p>
                </div>
              )}
              {step.travel_mode === 'WALKING' && <div className="bg-darkGrey rounded-full w-0.5 h-6 ml-3 mt-1"> </div>}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'BUS' && (
                <div className="mt-1 flex">
                  <img className="w-7 h-7" alt="부랴부랴" src="/assets/bus.png" />
                  <p className="ml-2 mt-0.5 text-base text-lightBlack font-normal ">
                    {step.transit_details.departure_stop}
                  </p>
                  <p className="ml-2 mt-2 text-xs text-darkGrey font-light">{step.transit_details.headsign}</p>
                </div>
              )}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'BUS' && (
                <div className="flex items-center">
                  <div className="bg-[#379df1] rounded-full w-0.5 h-20 ml-3 mt-1"> </div>
                  <div>
                    <p className="ml-5 mt-0.5 text-base text-[#379df1] font-normal">{step.transit_details.number} </p>

                    <p className="ml-5 text-sm text-darkGrey font-light"> {step.duration.text} </p>
                  </div>
                </div>
              )}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'BUS' && (
                <div className="mt-1 flex">
                  <div className="bg-[#379df1] rounded-full w-7 h-7 text-white"></div>
                  <p className="ml-2 mt-0.5 text-base text-lightBlack font-normal ">
                    {step.transit_details.arrival_stop}
                  </p>
                </div>
              )}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'SUBWAY' && (
                <div className="mt-1 flex">
                  <Subway {...step.transit_details.number} />

                  <p className="ml-2 mt-0.5 text-base text-lightBlack font-normal ">
                    {step.transit_details.departure_stop}역
                  </p>
                  <p className="ml-2 mt-2 text-xs text-darkGrey font-light">{step.transit_details.headsign}</p>
                </div>
              )}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'SUBWAY' && (
                <div className="flex items-center">
                  <SubwayLine {...step.transit_details.number} />
                  <p className="ml-5 text-sm text-darkGrey font-light"> {step.duration.text} </p>
                </div>
              )}
              {step.travel_mode === 'TRANSIT' && step.transit_details.vehicleType === 'SUBWAY' && (
                <div className="mt-1 flex">
                  <SubwayColor {...step.transit_details.number} />
                  <p className="ml-2 mt-0.5 text-base text-lightBlack font-normal ">
                    {step.transit_details.arrival_stop}역
                  </p>
                </div>
              )}
            </div>
          ))}
          <div className="flex mt-1">
            <div className="flex justify-center items-center bg-mainGreen rounded-full w-7 h-7 text-white text-xs">
              도착
            </div>
            <p className="ml-2 mt-0.1 text-base text-lightBlack font-normal "> {schedule.destination}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Detail;

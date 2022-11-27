import getDate from 'components/getDate';
import React, { useState, Dispatch, SetStateAction } from 'react';
import getDepart from '../../components/getDepart';
import GetDiffDay from '../../components/GetDiffDay';

interface ScheduleProps {
  schedule: {
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
  };
  // setMenuNumber: Dispatch<SetStateAction<number>>;
}

export function Schedule(props: ScheduleProps) {

  // const openMenu = (id: number) => {
  //   console.log(id);
  //   props.setMenuNumber(id);
  // };

  return (
    <div
      className=" flex justify-between w-full h-auto p-4 mb-5 bg-lightGrey drop-shadow-3xl transform transition hover:drop-shadow-4xl duration-500"
      onClick={() => {
        // openMenu(props.schedule.id);
      }}
    >
      <div className="flex flex-col text-lightBlack">
        <h2 className=" font-normal text-base mb-2">{props.schedule.title}</h2>
        <p className=" font-light text-sm mb-1">{getDate(props.schedule.arrivalTime)}</p>
        {/* <p className=" font-light text-sm">{getDate(props.schedule.arrivalTime)}</p> */}
        <p className=" font-light text-sm mb-1">{props.schedule.destination}</p>
      </div>

      <div className=" my-auto text-grey font-light text-base">
        <GetDiffDay departureTime={props.schedule.departureTime} />
      </div>
    </div>
  );
}
export default Schedule;

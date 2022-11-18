import React, { useState, Dispatch, SetStateAction } from 'react';
import getDepart from '../../components/getDepart';
import getDiffDay from '../../components/getDiffDay';

interface ScheduleProps {
  schedule: {
    title: string;
    origin: string;
    originLatitude: string;
    originLongitude: string;
    destination: string;
    destinationLatitude: string;
    destinationLongitude: string;
    departureTime: string;
    arrivalTime: string;
    beforeAlarm: number;
    path: string;
    type: string;
  };
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function Schedule(props: ScheduleProps) {
  const openMenu = (id: number) => {
    console.log(id);
    props.setMenuOpen(true);
  };
  
  return (
    <div
      className=" flex justify-between w-full h-24 p-4 mb-5 bg-lightGrey drop-shadow-3xl transform transition hover:drop-shadow-4xl duration-500"
      onClick={() => {
        openMenu(props.schedule.beforeAlarm);
      }}
    >
      <div className="flex flex-col text-lightBlack">
        <h2 className=" font-normal text-base mb-1">{props.schedule.title}</h2>
        <p className=" font-light text-sm">{getDepart(props.schedule.departureTime)}</p>  
        <p className=" font-light text-sm">{props.schedule.destination}</p>
      </div>

      <div className=" my-auto text-grey font-light text-base">{getDiffDay(props.schedule.departureTime, props.schedule.arrivalTime)}</div>
    </div>
  );
}
export default Schedule;

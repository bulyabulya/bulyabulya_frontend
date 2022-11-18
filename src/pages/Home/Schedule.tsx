import React, { useState, Dispatch, SetStateAction } from 'react';


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

function Schedule(props: ScheduleProps) {
  const openMenu = (id: number) => {
    console.log(id);
    props.setMenuOpen(true);
  };
  
  // 타임스탬프 -> 월/일/시/분 변환
  const stampToDate = (timestamp: string) => {
    const date = new Date(Number(timestamp)*1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return month+'월 '+day+'일 '+hours+':'+minutes
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
        <p className=" font-light text-sm">{stampToDate(props.schedule.departureTime)}</p>
        <p className=" font-light text-sm">{props.schedule.destination}</p>
      </div>

      <div className=" my-auto text-grey font-light text-base">3일 후</div>
    </div>
  );
}
export default Schedule;

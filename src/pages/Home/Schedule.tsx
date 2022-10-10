import React, { useState, Dispatch, SetStateAction } from "react";

interface ScheduleProps {
  schedule: {
    id:number;
    name:string;
    date:string;
    place:string;
  };
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function Schedule(props:ScheduleProps) {
  const openMenu = (id:number) => {
    console.log(id);
    props.setMenuOpen(true);
  };
    return(
      <div className=" flex justify-between w-full h-24 p-4 mb-5 bg-lightGrey drop-shadow-3xl transform transition hover:drop-shadow-4xl duration-500"
      onClick={()=>{openMenu(props.schedule.id)}}>
        <div className="flex flex-col text-lightBlack">
            <h2 className=" font-normal text-base mb-1">{props.schedule.name}</h2>
            <p className=" font-light text-sm">{props.schedule.date}</p>
            <p className=" font-light text-sm">{props.schedule.place}</p>
        </div>
        <div className=" my-auto text-grey font-light text-base">3일 후</div>
      </div>
  );
}
export default Schedule;

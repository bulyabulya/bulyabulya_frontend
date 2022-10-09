import React from "react";

interface scheduleType {
    id:number;
    name:string;
    date:string;
    place:string;
  }

function Schedule(schedule:scheduleType) {
    return(
      <div className=" flex justify-between w-full h-24 p-4 mb-5 bg-lightGrey drop-shadow-3xl">
        {/* 내용 */}
        <div className="flex flex-col text-lightBlack">
            <h2 className=" font-normal text-base mb-1">{schedule.name}</h2>
            <p className=" font-light text-sm">{schedule.date}</p>
            <p className=" font-light text-sm">{schedule.place}</p>
        </div>
        {/* 날짜 */}
        <div className=" my-auto text-grey font-light text-base">3일 후</div>
      </div>
    );
}
export default Schedule;
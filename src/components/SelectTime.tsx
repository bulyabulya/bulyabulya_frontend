import React, { useState, Dispatch, SetStateAction } from 'react';


interface timeProps {
    setSelectTimeOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedTime: Dispatch<SetStateAction<number>>;
  }

  
function SelectTime(props: timeProps) {
  const timeList: number[] = [10,20,30,40,50,60];
  
  const handleClick = (key:number) => {
    props.setSelectedTime(timeList[key]);
    props.setSelectTimeOpen(false);
  }
  return <div className='w-16 px-2 pt-2 border border-t-0 border-grey rounded-b-lg'>
    {timeList.map((time: number, key: number) => {
        return <div key={key} className="text-xl h-10 rounded-md text-lightblack hover:text-mainGreen" onClick={()=>{handleClick(key)}}>
            {time}
        </div>
    })}
  </div>;
}
export default SelectTime;

import React, { MutableRefObject, useEffect, useState } from 'react';
import Notification from './Notification';

function GetDiffDay(props: any) {
  // const start = new Date(); // 출발시간
  const end = new Date(props.departureTime); // 도착시간
  const [diffDate, setDiffDate] = useState<number>(end.getTime() - new Date().getTime());
  const [diffDay, setDiffDay] = useState<number>(Math.floor(diffDate / (1000 * 60 * 60 * 24)));
  const [diffHour, setDiffHour] = useState<number>(Math.floor(diffDate / (1000 * 60 * 60)));
  const [diffMinute, setDiffMinute] = useState<number>(Math.round((diffDate / (1000 * 60)) % 60));
  const [diffSecond, setDiffSecond] = useState<number>(Math.round((diffDate / 1000) % 60));
  const [jinam, setJinam] = useState<boolean>(diffDate < 0 ? true : false);

  useEffect(() => {
    const timer = setInterval(() => {
      setDiffDay(Math.floor((end.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));
      setDiffHour(Math.floor((end.getTime() - new Date().getTime()) / (1000 * 60 * 60)));
      setDiffMinute(Math.round(((end.getTime() - new Date().getTime()) / (1000 * 60)) % 60));
      setDiffSecond(Math.round(((end.getTime() - new Date().getTime()) / 1000) % 60));
      setJinam(end.getTime() - new Date().getTime() < 0 ? true : false);
   
      // if (diffMinute <= 10 && diffHour < 1 && diffDay < 1)  {
      //   props.setNotification(true);
      // }
      if(diffMinute <= 10 && diffHour < 1 && diffDay < 1) {
        props.setNotification(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {diffDay > 0 ? (
        <div className="font-light">{diffDay}일 후</div>
      ) : (
        <div>
          {diffHour > 0 ? (
            <div className=" text-subGreen font-normal">약 {diffHour}시간 후</div>
          ) : jinam === true ? (
            <div className=" text-red-500 font-normal">{diffMinute}분 늦었어요!!</div>
          ) : diffMinute === 0 ? (
            <div className="text-mainGreen font-normal">출발==3</div>
          ) : (
            <div className="text-mainGreen font-normal">{diffMinute}분 후</div>
          )}
        </div>
      )}

      
    </div>
  );
}

export default GetDiffDay;

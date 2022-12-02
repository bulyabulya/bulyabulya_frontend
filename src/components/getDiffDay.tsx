import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

const padNumber = (num: number, length: number) => {
  return String(num).padStart(length, '0');
};

function GetDiffDay(props: any) {
  // const start = new Date(); // 출발시간
  const [start, setStart] = useState(new Date());
  const end = new Date(props.departureTime); // 도착시간
  const [diffDate, setDiffDate] = useState<number>(end.getTime() - start.getTime());
  const [diffDay, setDiffDay] = useState<number>(Math.floor(diffDate / (1000 * 60 * 60 * 24)));
  const [diffHour, setDiffHour] = useState<number>(Math.floor(diffDate / (1000 * 60 * 60)));
  const [diffMinute, setDiffMinute] = useState<number>(Math.round((diffDate / (1000 * 60)) % 60));
  const [diffSecond, setDiffSecond] = useState<number>(Math.round((diffDate / 1000) % 60));
  const [jinam, setJinam] = useState<boolean>(diffDate < 0 ? true : false);

  const interval = useRef<NodeJS.Timer | null>(null);
  const [now, setNow] = useState(new Date());
  const [hour, setHour] = useState(padNumber(now.getHours(), 2));
  const [min, setMin] = useState(padNumber(now.getMinutes(), 2));
  const [sec, setSec] = useState(padNumber(now.getSeconds(), 2));

  // useEffect(() => {
  //   interval.current = setInterval(() => {
  //     setNow(new Date());
  //     setHour(padNumber(now.getHours(), 2));
  //     setMin(padNumber(now.getMinutes(), 2));
  //     setSec(padNumber(now.getSeconds(), 2));
  //   }, 1000);

  //   interval.current.refresh();

  //   // clean-up 함수 리턴!
  //   return () => clearInterval(interval.current?.refresh());

  //   // const timer = setInterval(() => {

  //   //   setDiffDate(end.getTime() - start.getTime());
  //   //   setDiffDay(Math.floor(diffDate / (1000 * 60 * 60 * 24)));
  //   //   setDiffHour(Math.floor(diffDate / (1000 * 60 * 60)));
  //   //   setDiffMinute(Math.round((diffDate / (1000 * 60)) % 60));
  //   //   setJinam(diffDate < 0 ? true : false);
  //   //   setDiffSecond(Math.round((diffDate / 1000) % 60));
  //   // }
  //   // , 2000);
  //   // return () => clearInterval(timer);
  // }, [now]);
  return (
    <div>
      {/* <div>{sec}</div> */}
      {diffDay > 0 ? (
        <div className="font-light">{diffDay}일 후</div>
      ) : (
        <div>
          {diffHour > 0 ? (
            <div className=" text-subGreen font-normal">약 {diffHour}시간 후</div>
          ) : jinam === true ? (
            <div className=" text-subRed font-light">지난 일정</div>
          ) : (
            <div className="text-mainGreen font-normal">
              {diffMinute}분 후
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetDiffDay;

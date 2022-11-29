import React from 'react';

function GetDiffDay(props: any) {
  const start = new Date(); // 출발시간
  const end = new Date(props.departureTime); // 도착시간

  const diffDate = end.getTime() - start.getTime();
  const diffDay = Math.floor(diffDate / (1000 * 60 * 60 * 24));

  // 당일
  const diffHour = Math.floor(diffDate / (1000 * 60 * 60));
  const diffMinute = Math.round((diffDate / (1000 * 60)) % 60);
  const jinam = diffDate < 0 ? true : false;

  return (
    <div>
      {diffDay > 0 ? (
        <div className='font-light'>{diffDay}일 후</div>
      ) : (
        <div>
          {diffHour > 0 ? (
            <div className=" text-subGreen font-normal">약 {diffHour}시간 후</div>
          ) : jinam === true ? (
            <div className=" text-subRed font-light">지난 일정</div>
          ) : (
            <div className="text-mainGreen font-normal">{diffMinute}분 후</div>
          )}
        </div>
      )}
    </div>
  );
}

export default GetDiffDay;

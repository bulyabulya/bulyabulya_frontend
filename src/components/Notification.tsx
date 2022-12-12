import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Notification() {
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }),
    [];

  useEffect(() => {
    const timer = setTimeout(() => {
        setIsShow(true);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    setIsShow(true);
  }, []);

  return (
    <div
      className={`fixed left-0 ${
        isShow ? 'top-10' : 'top-[-70px]'
      } w-[calc(100%-64px)] mx-8 h-16 bg-mainGreen opacity-95 drop-shadow-3xl rounded-2xl transition-all duration-300`}
    >
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <div className="text-white font-medium text-sm">출발 할 시간이에요 (놀러가는 날)</div>
        </div>
      </div>
    </div>
  );
}

export default Notification;

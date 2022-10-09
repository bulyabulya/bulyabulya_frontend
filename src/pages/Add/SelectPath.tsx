import React from 'react';
import Path from './Path';

function SelectPath() {
  const pathList = [
    {
      id: 1,
      time: 30,
      detail: '버스(40분)-지하철(60분)',
      note: '최단시간',
    },
    {
      id: 2,
      time: 50,
      detail: '버스(40분)-지하철(60분)',
      note: '최소환승',
    },
    {
      id: 3,
      time: 70,
      detail: '버스(40분)-지하철(60분)',
      note: '',
    },
  ];
  return (
    <div>
      <h1 className=" text-xl font-medium mb-6">마음에 드는 경로를 선택해주세요!</h1>
      <div>
        {
             pathList.map((vlaue, key)=>(
                <Path key={key} {...vlaue}></Path>
            ))
        }
      </div>
    </div>
  );
}
export default SelectPath;

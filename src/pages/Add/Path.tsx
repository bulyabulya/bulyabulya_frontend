import Subway from 'components/Subway';
import React, { useEffect } from 'react';

interface pathType {
  arrival_time: any;
  departure_time: any;
  duration: any;
  end_address: any;
  start_address: any;
  steps: Array<any>;
}

function Path(path: pathType) {
  return (
    <div className=" w-full h-auto bg-lightGrey rounded-md mb-6 p-5 drop-shadow-3xl text-lightBlack hover:bg-subGreen hover:text-white">
      <div className="flex justify-between mx-2 mt-1">
        <p>
          {path.departure_time.text} ~ {path.arrival_time.text}
        </p>
        <p>{path.duration.text}</p>
      </div>
      <div className='flex flex-wrap mt-4 mb-3'>
        {path.steps.map((value: any, key: any) => (
          <div key={key} className='ml-2'>
            {value.travel_mode === 'TRANSIT' && (
              <div>
                {value.transit_details.vehicleType === 'BUS' ? (
                  <img className="w-7 h-7" alt="부랴부랴" src="/assets/bus.png" />
                ) : (
                  <Subway key={key} {...value.transit_details.number}></Subway>
                )}
              </div>
            )}
            {
                value.travel_mode === 'WALKING' && (<div> --- </div>)
            }
          </div>
        ))}
      </div>
    </div>
  );
}
export default Path;

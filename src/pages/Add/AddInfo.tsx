import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, GoogleMap, LoadScript } from '@react-google-maps/api';

function AddInfo() {
  const navigate = useNavigate();
  const [autocompleteOrigin, setAutocompleteOrigin] = useState<any>(null);
  const [autocompleteDestination, setAutocompleteDestination] = useState<any>(null);
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const timezoneDate = new Date(Date.now() - timezoneOffset).toISOString().slice(0, 16);
  const [scheduleName, setScheduleName] = useState<string>('');
  const [arrivalTime, setArrivalTime] = useState<string>(timezoneDate);
  const googleApiKey: string = process.env.REACT_APP_GOOGLE_API_KEY || '';

  const onLoadOrigin = (autocomplete: any) => {
    setAutocompleteOrigin(autocomplete);
  };
  const onPlaceChangedOrigin = () => {
    autocompleteOrigin !== null ? console.log(autocompleteOrigin.getPlace()) : console.log('출발지아직~!');
  };
  const onLoadDestination = (autocomplete: any) => {
    setAutocompleteDestination(autocomplete);
  };
  const onPlaceChangedDestination = () => {
    autocompleteDestination !== null ? console.log(autocompleteDestination.getPlace()) : console.log('아직~!');
  };

  return (
    <div className=" h-100 flex flex-col justify-between">
      <div>
        <input
          className=" text-xl border-none focus:outline-none mb-6"
          placeholder="일정명을 입력하세요"
          value={scheduleName}
          onChange={(event) => {
            setScheduleName(event.target.value);
          }}
        ></input>
        <p className=" text-base font-medium mb-2 mt-3">출발지</p>
        <LoadScript googleMapsApiKey={googleApiKey} libraries={['places']}>
          <GoogleMap id="searchbox-example" mapContainerStyle={{ width: '100%', height: '40px' }}>
            <Autocomplete onLoad={onLoadOrigin} onPlaceChanged={onPlaceChangedOrigin}>
              <input
                type="text"
                placeholder="출발지"
                className=" w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none overflow-visible absolute"
              />
            </Autocomplete>
          </GoogleMap>
        </LoadScript>

        <p className=" text-base font-medium mb-2 mt-3">도착지</p>
        <LoadScript googleMapsApiKey={googleApiKey} libraries={['places']}>
          <GoogleMap id="searchbox-example" mapContainerStyle={{ width: '100%', height: '40px' }}>
            <Autocomplete onLoad={onLoadDestination} onPlaceChanged={onPlaceChangedDestination}>
              <input
                type="text"
                placeholder="도착지"
                className=" w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none overflow-visible absolute"
              />
            </Autocomplete>
          </GoogleMap>
        </LoadScript>
        <p className=" text-base font-medium mb-2 mt-3">도착 시간</p>
        <input
          className=" w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none"
          placeholder="도착시간"
          type="datetime-local"
          value={arrivalTime}
          
          min={timezoneDate}
          onChange={(event) => {
            setArrivalTime(event.target.value);
          }}
        ></input>
      </div>
      <div className="flex justify-between mb-6 text-sm">
        <button
          className=" w-20 h-7 bg-grey rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={() => {
            navigate('/home');
          }}
        >
          취소
        </button>
        <button
          className=" w-20 h-7 bg-mainGreen rounded-sm text-white drop-shadow-btn transform transition hover:scale-110 duration-100"
          onClick={() => {
            navigate('/selectPath');
          }}
        >
          경로 선택
        </button>
      </div>
    </div>
  );
}
export default AddInfo;

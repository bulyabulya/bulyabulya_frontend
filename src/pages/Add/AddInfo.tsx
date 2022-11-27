import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { ScheduleInformation } from 'store/atom';

function AddInfo() {
  const navigate = useNavigate();
  const [information, setInformation] = useRecoilState(ScheduleInformation);
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);
  const [autocompleteOrigin, setAutocompleteOrigin] = useState<any>(null);
  const [autocompleteDestination, setAutocompleteDestination] = useState<any>(null);
  const timezoneOffset = new Date().getTimezoneOffset() * 60000;
  const timezoneDate = new Date(Date.now() - timezoneOffset).toISOString().slice(0, 16);
  const [scheduleName, setScheduleName] = useState<string>('');
  const [arrivalTime, setArrivalTime] = useState<string>(timezoneDate);
  const googleApiKey: string = process.env.REACT_APP_GOOGLE_API_KEY || '';

  useEffect(() => {
    if (!accessToken.accessToken) {
      navigate('/');
    }
  }, []);
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
  const next = async () => {
    if (scheduleName && arrivalTime && autocompleteOrigin && autocompleteDestination) {
      const originLatitude: string = autocompleteOrigin.getPlace().geometry.location.lat();
      const originLongtitude: string = autocompleteOrigin.getPlace().geometry.location.lng();
      const destinationLatitude: string = autocompleteDestination.getPlace().geometry.location.lat();
      const destinationLongitude: string = autocompleteDestination.getPlace().geometry.location.lng();
      const arrivaltime: number = new Date(arrivalTime).getTime();
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_WEB_API_URL}/schedule/route/${originLatitude}/${originLongtitude}/${destinationLatitude}/${destinationLongitude}/${arrivaltime}`,
          {
            headers: {
              authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
            },
          }
        );
        setInformation({
          ...information,
          scheduleName: scheduleName,
          arrivalTime: arrivalTime,
          origin: autocompleteOrigin.getPlace().name,
          originLatitude: originLatitude.toString(),
          originLongitude: originLongtitude.toString(),
          destination: autocompleteDestination.getPlace().name,
          destinationLatitude: destinationLatitude.toString(),
          destinationLongitude: destinationLongitude.toString(),
        });
        console.log(response.data.data);
        navigate('/selectPath', {state: response.data.data});
      } catch (error) {
        console.log(error);
        alert('에러가 발생했습니다.');
      }
    } else {
      alert('모든 정보를 입력해주세요!');
    }
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey,
    libraries: ['places'],
  });

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
        {isLoaded && (
          <GoogleMap id="searchbox-example" mapContainerStyle={{ width: '100%', height: '40px' }}>
            <Autocomplete onLoad={onLoadOrigin} onPlaceChanged={onPlaceChangedOrigin}>
              <input
                type="text"
                placeholder="출발지"
                className=" w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none overflow-visible absolute"
              />
            </Autocomplete>
          </GoogleMap>
        )}

        <p className=" text-base font-medium mb-2 mt-3">도착지</p>
        {isLoaded && (  
          <GoogleMap id="searchbox-example" mapContainerStyle={{ width: '100%', height: '40px' }}>
            <Autocomplete onLoad={onLoadDestination} onPlaceChanged={onPlaceChangedDestination}>
              <input
                type="text"
                placeholder="도착지"
                className=" w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none overflow-visible absolute"
              />
            </Autocomplete>
          </GoogleMap>
          )}
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
          onClick={next}
        >
          경로 선택
        </button>
      </div>
    </div>
  );
}
export default AddInfo;

import React, { useState } from 'react';
import { Autocomplete, GoogleMap, LoadScript } from '@react-google-maps/api';

function TestPage() {
  const [autocomplete, setAutocomplete] = useState<any>(null);
  const onLoad = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };
  const onPlaceChanged = () => {
    autocomplete !== null ? console.log(autocomplete.getPlace()) : console.log('아직~!');
  };
  return (
      <LoadScript googleMapsApiKey="AIzaSyAO-2P7YTRO_3Z4V5iqD97a-EzGQnZ4_70" libraries={['places']}>
        <GoogleMap id="searchbox-example" mapContainerStyle={{width:'100%', height:'40px'}} zoom={2.5} center={{lat:38, lng:-115}}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="출발지"
              className=' w-full h-10 text-sm font-light border border-grey rounded-sm p-1 mb-5 focus:outline-none overflow-visible absolute'
            />
          </Autocomplete>
        </GoogleMap>
      </LoadScript>
  );
}
export default TestPage;

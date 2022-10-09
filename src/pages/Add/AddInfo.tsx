import React, { useState } from 'react';

function AddInfo() {
  const [scheduleName, setScheduleName] = useState<string>();
  const [origin, setOrigin] = useState<{
    name: string;
    coordinate: string;
  }>();
  const [destination, setDestination] = useState<{
    name: string;
    coordinate: string;
  }>();
  return <></>;
}
export default AddInfo;

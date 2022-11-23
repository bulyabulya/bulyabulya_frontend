import React, { useEffect } from "react";

interface pathType {
    id: number;
    origin : string;
    originLatitude: string;
    originLongitude : string;
    destination : string;
    destinationLatitude : string;
    destinationLongitude : string;
    departureTime : string;
    arrivalTime : string;
    beforeAlarm : number;
    alarmTime : string; 
    path : string;
    type : string;
}

function Path(path:pathType) {
    return (
        <div className=" w-full h-40 bg-lightGrey rounded-md mb-6 drop-shadow-3xl">
            <p className="">{path.beforeAlarm}</p>
        </div>
    )
}
export default Path;
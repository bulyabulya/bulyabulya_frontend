import React, { useEffect } from "react";

interface pathType {
    id: number;
    time: number;
    detail: string;
    note: string;
}

function Path(path:pathType) {
    return (
        <div className=" w-full h-40 bg-lightGrey rounded-md mb-6 drop-shadow-3xl">
            <p className="">{path.time}</p>
        </div>
    )
}
export default Path;
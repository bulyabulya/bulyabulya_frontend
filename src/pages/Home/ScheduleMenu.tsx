import React from "react";

interface scheduleMenuType {
    menuOpen: boolean;
    close: () => void
}

function ScheduleMenu(props:scheduleMenuType) {
    return(
        <div className=" w-screen h-screen fixed left-0 top-0 bg-black/30 z-50">
            <div className=" w-screen h-40 fixed bottom-0 bg-white z-100 opacity-100">

            </div>
        </div>
    )
}
export default ScheduleMenu;
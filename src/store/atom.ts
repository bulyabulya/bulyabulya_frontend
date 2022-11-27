import { atom } from "recoil";

export interface IscheduleInformation {
    scheduleName: string;
    origin: string;
    originLatitude: string;
    originLongitude: string;
    destination: string;
    destinationLatitude: string;
    destinationLongitude: string;
    arrivalTime: string;
}

export const ScheduleInformation = atom<IscheduleInformation>({
    key: "ScheduleInformation",
    default: {
        scheduleName: "",
        origin: "",
        originLatitude: "",
        originLongitude: "",
        destination: "",
        destinationLatitude: "",
        destinationLongitude: "",
        arrivalTime: "",
    },
});



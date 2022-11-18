// 소요시간
const getDuration = (departureTime: string, arrivalTime: string) => {
    const start = new Date(Number(departureTime)*1000); // 출발시간
    const end = new Date(Number(arrivalTime)*1000); // 도착시간
    const diffTime = (end.getTime() - start.getTime()) / (1000*60);

    if ((Math.floor(diffTime)) > 60) {
      return (Math.floor(diffTime/60)) + '시간 ' + (Math.floor(diffTime%60))+ '분'
    } 
    else {
      return Math.floor(diffTime) +'분'
    }
  };

  export default getDuration;
// 일수 차이
const getDiffDay = (departureTime: string, arrivalTime: string) => {
  const start = new Date(Number(departureTime)); // 출발시간
  const end = new Date(Number(arrivalTime)); // 도착시간
  const diffDay = ((end.getTime() - start.getTime()) * 1000) / (1000 * 60 * 60 * 24);
  //console.log(diffDay);

  // 당일
  if (Math.floor(diffDay) == 0) {
    return 'Today'
  }
  return Math.floor(diffDay) + '일 후';
};

export default getDiffDay;

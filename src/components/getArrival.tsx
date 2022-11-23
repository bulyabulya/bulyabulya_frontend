// 타임스탬프 -> '시 분' 변환
const getArrival = (arrivalTime: string) => {
    const date = new Date(Number(arrivalTime)*1000);
    //const month = date.getMonth() + 1;
    //const day = date.getDate();
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return hours+'시 '+minutes+'분'
  };

  export default getArrival;
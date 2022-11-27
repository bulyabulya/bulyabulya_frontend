// 타임스탬프 -> '월 일 시 분' 변환
  const getDepart = (departureTime: string) => {
    const date = new Date(Number(departureTime)*1000);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours:string = ('0' + date.getHours()).slice(-2);
    const isAm = parseInt(hours) < 12 ? '오전' : '오후';
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const hour = parseInt(hours) > 12 ? (parseInt(hours) - 12).toString() : hours;

    return month+'월 '+day+'일 '+isAm+' '+hour+'시 '+minutes+'분';
  };

  export default getDepart;
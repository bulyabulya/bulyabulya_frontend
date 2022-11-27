import React from 'react';

const SubwayColor = (number: string) => {
  return (
    
    <div>
      {number[0] === '1' && <div className='bg-[#0052A4] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '2' && <div className='bg-[#00A84D] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '3' && <div className='bg-[#EF7C1C] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '4' && <div className='bg-[#00A5DE] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '5' && <div className='bg-[#996CAC] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '6' && <div className='bg-[#CD7C2F] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '7' && <div className='bg-[#747F00] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}
      {number[0] === '8' && <div className='bg-[#E6186C] rounded-full w-7 h-7 text-white text-center align-middle text-lg'></div>}
      {number[0] === '9' && <div className='bg-[#BDB092] rounded-full w-7 h-7 text-white text-center align-middle text-lg'> </div>}

      {/* bus 379df1 */}

    </div>
  );
};
export default SubwayColor;

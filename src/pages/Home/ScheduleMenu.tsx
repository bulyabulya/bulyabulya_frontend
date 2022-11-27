import axios from 'axios';
import getDate from 'components/getDate';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

interface scheduleMenuType {
  id: number;
  title: string;
  origin: string;
  destination: string;
  time: string;
  close: () => void;
}

function ScheduleMenu(props: scheduleMenuType) {
  const navigate = useNavigate();
  const [accessToken, setAccessToken, removeCookie] = useCookies(['accessToken']);
  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      props.close();
    }
  };
  const handleClickDetail = () => {
    navigate(`/detail/${props.id}`);
  }
  const handleDelete = async() => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_WEB_API_URL}/schedule/${props.id}`, {
        headers: {
          authorization: accessToken ? `Bearer ${accessToken.accessToken}` : '',
        },
      });
      console.log(response);
      props.close();
      location.reload();
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(props)
  }, [props.id]);
  return (
    <div className=" w-screen h-screen fixed left-0 top-0 bg-black/30 z-50" onClick={closeModal}>
      <div className=" w-full h-48 fixed bottom-0 p-5 bg-white z-100 opacity-100">
        <div className=' pb-4 border-b border-grey border-dashed'>
          <h1 className=' mb-1 font-normal'>{props.title}</h1>
          <p className=' text-lightBlack text-sm font-light'>{getDate(props.time)}</p>
          <p className=' text-lightBlack text-sm font-light'>{props.origin} -&gt; {props.destination}</p>
        </div>
        <div className='h-1/3 mt-4'>
          <button className=' flex w-full text-sm font-light mb-2' onClick={handleClickDetail}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-3"
            >
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            자세히 보기
          </button>
          <button className=' flex w-full text-sm font-light' onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 mr-3"
            >
              <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}
export default ScheduleMenu;

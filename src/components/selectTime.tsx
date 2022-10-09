import React, { useState } from 'react';
import DropDownTime from './DropDownTime';

const OptTime: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectTime, setSelectTime] = useState<string>('');
  const timeList = () => {
    return ['10분', '20분', '30분', '40분', '50분', '60분'];
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * time name from the child component
   *
   * @param time  The selected time
   */
  const timeSelection = (time: string): void => {
    setSelectTime(time);
  };

  return (
    <div>
      <div className="announcement">
        <div className="mb-5 text-left text-3xl">
          {selectTime ? `${selectTime} 전에 알려드릴게요!` : '출발시간 알림'}
        </div>
      </div>
      <div className="w-full text-left mb-5">
        <button
          className="{showDropDown ? 'active' : undefined} w-full"
          onClick={(): void => toggleDropDown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void => dismissHandler(e)}
        >
          <div className="text-left text-2xl h-10 rounded-md text-lightblack border-lightblack border-2">
            {selectTime ? selectTime : '시간 선택'}{' '}
          </div>
          {showDropDown && (
            <DropDownTime
              timeList={timeList()}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropDown()}
              timeSelection={timeSelection}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default OptTime;

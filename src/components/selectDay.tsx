import React, { useState } from "react";
import DropDownDay from "./DropDownDay";

const OptDay: React.FC = (): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectDay, setSelectDay] = useState<string>("");
  const dayList = () => {
    return ["일요일", "월요일", "화요일", "수요일", "목요일","금요일","토요일"];
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
   * @param day  The selected time
   */
  const daySelection = (day: string): void => {
    setSelectDay(day);
  };

  return (
    <>
      <div className="announcement">
        <div>
          {selectDay
            ? `${selectDay}에 알려드릴게요!`
            : "반복"}
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectDay ? selectDay : "반복 선택"} </div>
        {showDropDown && (
          <DropDownDay
            dayList={dayList()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            daySelection={daySelection}
          />
        )}
      </button>
    </>
  );
};

export default OptDay;

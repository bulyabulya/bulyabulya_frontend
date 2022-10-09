import React, { useEffect, useState } from 'react';

type DropDownProps = {
  dayList: string[];
  showDropDown: boolean;
  toggleDropDown: any;
  daySelection: any;
};

const DropDownDay: React.FC<DropDownProps> = ({
  dayList,
  daySelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the day name
   * back to the parent component
   *
   * @param day  The selected day
   */
  const onClickHandler = (day: string): void => {
    daySelection(day);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {dayList.map(
          (day: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(day);
                }}
              >
                {day}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDownDay;

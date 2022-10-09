import React, { useEffect, useState } from 'react';

type DropDownProps = {
  timeList: string[];
  showDropDown: boolean;
  toggleDropDown: any;
  timeSelection: any;
};

const DropDownTime: React.FC<DropDownProps> = ({
  timeList,
  timeSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Handle passing the time name
   * back to the parent component
   *
   * @param time  The selected time
   */
  const onClickHandler = (time: string): void => {
    timeSelection(time);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? 'dropdown' : 'dropdown active'}>
        {timeList.map(
          (time: string, index: number): JSX.Element => {
            return (
              <p
                key={index}
                onClick={(): void => {
                  onClickHandler(time);
                }}
              >
                {time}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default DropDownTime;

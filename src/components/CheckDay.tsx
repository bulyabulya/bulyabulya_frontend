import React, { useState } from 'react';
import CheckBoxDay from './CheckBoxDay';

export default function CheckDay() {
  const [isCheckedSun, setIsCheckedSun] = useState(false);
  const handleChangeSun = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedSun(e.target.checked);
  };

  const [isCheckedMon, setIsCheckedMon] = useState(false);
  const handleChangeMon = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedMon(e.target.checked);
  };

  const [isCheckedTue, setIsCheckedTue] = useState(false);
  const handleChangeTue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedTue(e.target.checked);
  };
  const [isCheckedWed, setIsCheckedWed] = useState(false);
  const handleChangeWed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedWed(e.target.checked);
  };
  const [isCheckedThu, setIsCheckedThu] = useState(false);
  const handleChangeThu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedThu(e.target.checked);
  };
  const [isCheckedFri, setIsCheckedFri] = useState(false);
  const handleChangeFri = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedFri(e.target.checked);
  };
  const [isCheckedSat, setIsCheckedSat] = useState(false);
  const handleChangeSat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckedSat(e.target.checked);
  };

  return (
    <div>
      <p className="text-base font-medium mb-2">반복</p>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeSun} isChecked={isCheckedSun} label="일요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeMon} isChecked={isCheckedMon} label="월요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeTue} isChecked={isCheckedTue} label="화요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeWed} isChecked={isCheckedWed} label="수요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeThu} isChecked={isCheckedThu} label="목요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeFri} isChecked={isCheckedFri} label="금요일" />
      </div>
      <div className="mb-2">
        <CheckBoxDay handleChange={handleChangeSat} isChecked={isCheckedSat} label="토요일" />
      </div>
    </div>
  );
}

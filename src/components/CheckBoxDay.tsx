import React from "react";

interface Props {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const CheckBoxDay = (props: Props) => {
  return (
    <div className = 'flex justify-between'>
      <label htmlFor={props.label}>{props.label}</label>
      <input className = ''
        type="checkbox"
        id={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
      />
    </div>
  );
};
export default CheckBoxDay;

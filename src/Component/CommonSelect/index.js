import React from "react";
// import "./CommonList.css"

const CommonSelect = ({
  options,
  changeHandler,
  selectedData,
  id,
  customStyle,
  size,
}) => {
  return (
    <>
      <select value={selectedData} onChange={changeHandler} style={customStyle}>
        <option value="null" disabled>
          Select
        </option>
        {options.map((i) => {
          // {console.log(i)}
          return (
            <option key={i.id} value={i.value}>
              {i.value}
            </option>
          );
        })}
      </select>
    </>
  );
};
export default CommonSelect;

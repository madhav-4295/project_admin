import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const CommonSelect = ({
  options,
  changeHandler,
  selectedData,

  customStyle,
}) => {
  return (
    <>
      <Select
        value={selectedData}
        onChange={changeHandler}
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        style={customStyle}
      >
        <MenuItem value="null" disabled>
          Select
        </MenuItem>
        {options.map((i) => {
          return (
            <MenuItem key={i.id} value={i.value}>
              {i.value}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export default CommonSelect;

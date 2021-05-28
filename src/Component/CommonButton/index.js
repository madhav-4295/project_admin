import React from "react";
import Button from "@material-ui/core/Button";
const CommonButton = ({ title, AddSubject, customStyle }) => {
  return (
    <>
      <Button
        onClick={AddSubject}
        variant="contained"
        color="primary"
        size="small"
        style={customStyle}
      >
        {title}
      </Button>
    </>
  );
};

export default CommonButton;

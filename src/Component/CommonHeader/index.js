import React from "react";
import "./CommonHeader.css";

const CommonHeader = ({ customStyle, text }) => {
  return (
    <div className="container-header" style={customStyle}>
      <div style={{ marginTop: "2px", marginLeft: "0px" }}>{text}</div>
    </div>
  );
};

export default CommonHeader;

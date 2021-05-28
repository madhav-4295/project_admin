import React from "react";
import "./CommonList.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const CommonList = ({ options, fillData, id, customStyle }) => {
  return (
    <>
      {options.map((i) => {
        if (id === "studentList") {
          return (
            <List component="nav">
              <ListItem
                style={customStyle}
                key={i.id}
                onClick={() => {
                  fillData(i);
                }}
              >
                {i.name}
              </ListItem>
            </List>
          );
        } else {
          return (
            <List component="nav">
              <ListItem key={Math.random()} style={customStyle}>
                {i}
              </ListItem>
            </List>
          );
        }
      })}
    </>
  );
};
export default CommonList;

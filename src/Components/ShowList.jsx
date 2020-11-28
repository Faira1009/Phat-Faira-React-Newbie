import React from "react";
import "../assets/showList.css";

export function ShowList(props) {
  return (
    <div className="showListDiv">
      <div className="showCity">{props.city} </div>
      <div className="showTemp">{props.temper}</div>
      <div className="showIcon">{props.icon}</div>
      <div className="showState">{props.weatherState}</div>
    </div>
  );
}

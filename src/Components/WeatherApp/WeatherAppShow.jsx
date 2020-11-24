import React from "react";
import "../../assets/WeatherAppCSS/WeatherAppShow.css";

export function WeatherAppShow(props) {
  return (
    <div className="weatherAppShowMainDiv">
      <div className="cityName">{props.city} </div>
      <div className="temperature">{props.tempo} </div>
      <div className="icon">{props.ico} </div>
      <div className="weatherState">{props.weatherStat}</div>
    </div>
  );
}

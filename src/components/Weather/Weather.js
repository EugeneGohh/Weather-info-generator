import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";
import "./Weather.css";

function Weather({ weatherData }) {
  return (
    <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">Day: {moment().format("dddd")}</p>
        <p className="day">{moment().format("LL")}</p>
      </div>

      <div className="flex">
        <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-MY')}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-MY')}</p>
      </div>
    </div>
  );
}

export default Weather;

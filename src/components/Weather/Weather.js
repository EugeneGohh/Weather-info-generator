import React from "react";
import { Card } from "semantic-ui-react";
import moment from "moment";

function Weather({ weatherData }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header className="header">City name: {weatherData.name}</Card.Header>

        <p>Temprature: {weatherData.main.temp} &deg;C</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-MY')}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-MY')}</p>
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Air humidity: {weatherData.main.humidity} %</p>

        <p>Day: {moment().format('dddd')}</p>
        <p>Date: {moment().format('MMM Do YY')}</p>
        <p>Current Time: {moment().format('LTS')}</p>
      </Card.Content>
    </Card>
  );
}

export default Weather;

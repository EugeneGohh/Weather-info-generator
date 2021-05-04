import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude: ", lat);
    console.log("Longtitude: ", long);
  }, [lat, long]);

  return (
     <div className="App">
       
     </div>);
}

export default App;

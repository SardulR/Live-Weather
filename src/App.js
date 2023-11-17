import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      {/* <div className="header">
        <h1>Weather App</h1>
      </div> */}
      <div className="container">
        <CurrentLocation />
      </div>
      
    </React.Fragment>
  );
}

export default App;

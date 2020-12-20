import React, { Component } from "react";

import Animal from "./Animal";
import "./styles.css";

class App extends Component {
  render() {
    const details = [
      {
        name: "Tiger",
        number: 3890,
        endangered: true
      },
      {
        name: "Brown Bear",
        number: 2000,
        endangered: false
      },
      {
        name: "Red Panda",
        number: 1000,
        endangered: true
      }
    ];
    return (
      <div className="App">
        <Animal details={details}>
          <h3>Endangered Animals</h3>
        </Animal>
      </div>
    );
  }
}

export default App;

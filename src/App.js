import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body>
        <header>
          <h1>golf / grok</h1>
        </header>

        {/* total hole count */}
        <section id="holeCount">
          <h2>
            <span>0</span>
            <br />
            holes played in 2019
          </h2>
        </section>

        {/* rounds */}
        <section id="rounds">
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
        </section>

        {/* overall data summaries */}
        <section id="dataSummaries">
          <ul>
            <li>
              <span>0</span>
              <br />
              yards
            </li>
            <li>
              <span>0</span>
              <br />
              courses played
            </li>
            <li>
              <span>0</span>
              <br />
              birdies
            </li>
            <li>
              <span>0</span>
              <br />
              eagles
            </li>
            <li>
              <span>0</span>
              <br />
              lessons
            </li>
            <li>
              <span>0</span>
              <br />
              bottles of sunscreen
            </li>
            <li>
              <span>0</span>
              <br />
              golf gloves
            </li>
            <li>
              <span>?</span>
              <br />
              maximum temperature
            </li>
            <li>
              <span>?</span>
              <br />
              minimum temperature
            </li>
          </ul>
        </section>
      </body>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import GolfGrokHeader from "./components/GolfGrokHeader.jsx";
import HoleCountHero from "./components/HoleCountHero.jsx";
import Rounds from "./components/Rounds.jsx";
import DataSummaries from "./components/DataSummaries.jsx";

class App extends Component {
  render() {
    return (
      <body>
        <GolfGrokHeader />

        <HoleCountHero holeCount={0} />

        <Rounds />

        <DataSummaries />
      </body>
    );
  }
}

export default App;

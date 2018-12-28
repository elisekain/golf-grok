import React from "react";
import PropTypes from "prop-types";

function DataSummaries() {
  return (
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
  );
}

DataSummaries.propTypes = {};

export default DataSummaries;

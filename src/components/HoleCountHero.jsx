import React from "react";
import PropTypes from "prop-types";

function HoleCountHero({ holeCount }) {
  return (
    <section id="holeCount">
      <h2>
        <span>{holeCount}</span>
        <br />
        holes played in 2019
      </h2>
    </section>
  );
}

HoleCountHero.propTypes = {
  holeCount: PropTypes.number
};

export default HoleCountHero;

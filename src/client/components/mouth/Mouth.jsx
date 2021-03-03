import React from 'react';
import PropTypes from 'prop-types';
import { arc } from 'd3';

const Mouth = (props) => {
  const {radius, width} = props;
  const mouthArc = arc()
    .innerRadius(radius)
    .outerRadius(radius + width)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * (3 / 2));
  return (
    <path d={mouthArc()} />
  );
};

Mouth.propTypes = {
  width: PropTypes.number,
  radius: PropTypes.number,
};

export default Mouth;

import React from 'react';
import PropTypes from 'prop-types';

const Eyes = (props) => {
  const {
    radius,
    cx,
    cy,
    fillColor,
  } = props;

  return (
    <>
      <circle r={radius} cx={cx} cy={cy} fill={fillColor} />
      <circle r={radius} cx={-cx} cy={cy} fill={fillColor} />
    </>
  );
};

Eyes.propTypes = {
  radius: PropTypes.number,
  fillColor: PropTypes.string,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

export default Eyes;

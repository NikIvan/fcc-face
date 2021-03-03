import React from 'react';

import PropTypes from 'prop-types';

const BackgroundCircle = (props) => {
  const {
    radius,
    fillColor,
    strokeColor,
    strokeWidth,
  } = props;

  return (
    <circle
      r={radius}
      cx={0}
      cy={0}
      fill={fillColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  );
};

BackgroundCircle.propTypes = {
  radius: PropTypes.number,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
};

export default BackgroundCircle;

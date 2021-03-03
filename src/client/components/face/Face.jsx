import React from 'react';
import PropTypes from 'prop-types';
import Eyes from '../eyes';
import Mouth from '../mouth';
import BackgroundCircle from '../background-circle';

const Face = (props) => {
  const {
    width,
    height,
    centerX,
    centerY,
    faceRadius,
    fillColor,
    strokeColor,
    strokeWidth,
    eyeRadius,
    eyeOffsetX,
    eyeOffsetY,
    eyeColor,
    mouthWidth,
    mouthRadius,
  } = props;

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        <BackgroundCircle
          radius={faceRadius}
          fillColor={fillColor}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
        <Eyes
          radius={eyeRadius}
          cx={-eyeOffsetX}
          cy={-eyeOffsetY}
          fillColor={eyeColor}
        />
        <Mouth width={mouthWidth} radius={mouthRadius} />
      </g>
    </svg>
  );
};

Face.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  centerX: PropTypes.number,
  centerY: PropTypes.number,
  faceRadius: PropTypes.number,
  radius: PropTypes.number,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  eyeRadius: PropTypes.number,
  eyeOffsetX: PropTypes.number,
  eyeOffsetY: PropTypes.number,
  eyeColor: PropTypes.string,
  mouthWidth: PropTypes.number,
  mouthRadius: PropTypes.number,
};

export default Face;

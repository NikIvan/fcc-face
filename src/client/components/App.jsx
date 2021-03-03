import React from 'react';
import { range } from 'd3';

import Face from './face';

const width = 160;
const height = 160;
const faceRadius = 70;
const centerX = width / 2;
const centerY = height / 2;
const strokeColor = 'black';
const strokeWidth = 10;
const fillColor = ['yellow', 'yellowgreen', 'coral', 'skyblue', 'mediumorchid'];
const eyeOffsetX = 30;
const eyeOffsetY = 30;
const eyeRadius = 10;
const eyeColor = 'black';
const mouthWidth = 5;
const mouthRadius = 50;

const array = range(16);

function App() {
  const faces = array.map((el, i) => {
    const fillColorIndex = Math.floor(Math.random() * fillColor.length);

    return (
      <Face
        key={i}
        width={width}
        height={height}
        faceRadius={faceRadius}
        centerX={centerX}
        centerY={centerY}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        fillColor={fillColor[fillColorIndex]}
        eyeOffsetX={eyeOffsetX + Math.random() * 8 - 4}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius + Math.random() * 8 - 4}
        eyeColor={eyeColor}
        mouthWidth={mouthWidth + Math.random() * 6 - 3}
        mouthRadius={mouthRadius + Math.random() * 20 - 40}
      />);
  });

  return (
    <div>
      {faces}
    </div>
  );
}

export default App;

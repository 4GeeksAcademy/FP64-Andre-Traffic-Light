import { useState, useEffect } from 'react'
import './App.css'


function TrafficLight() {
  const [color, setColor] = useState('red');
  const colors = ['red', 'yellow', 'green'];

function getNextColor(currentColor) {
  const currentIndex = colors.indexOf(currentColor);
  const nextIndex = (currentIndex + 1) % colors.length;
  return colors[nextIndex];
}

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor(getNextColor(color));
    }, getDuration(color));

    return () => clearTimeout(timer);
  }, [color]);

  const colorDurations = {
    red: 1000,
    yellow: 500,
    green: 1000,
  };
  
  const getDuration = (currentColor) => {
    return colorDurations[currentColor] || 0;
  };


  return (
      
      <div className='trafficLight'  >
        <div className={'light red'+((color === "red") ? " glow" : "")}></div>
        <div className={'light yellow'+((color === "yellow") ? " glow" : "")}></div>
        <div className={'light green'+((color === "green") ? " glow" : "")}></div>
      </div>
      
  )
}

export default TrafficLight

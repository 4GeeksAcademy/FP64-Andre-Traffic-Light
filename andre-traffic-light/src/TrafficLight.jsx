import { useState, useEffect } from 'react'
import './App.css'
import CircleLight from './component/CircleLight.jsx'


function TrafficLight() {
  const [color, setColor] = useState('red');
  const [colors, setColors] = useState(['red', 'yellow', 'green']);


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
    purple: 1000,
  };

  const getDuration = (currentColor) => {
    return colorDurations[currentColor] || 0;
  };

  const addPurple = () => {
    if (!colors.includes('purple')) {
        setColors([...colors, 'purple'])
    }
    

  }


  return (

    <div className='trafficLight'  >
      {
        colors.map((colorItem, index) => {
          const active = colorItem === color;
          return <CircleLight active={active} key={index} color={colorItem}/>
        })
      } 
      <button onClick={() => {addPurple()}} >Add Purple</button>
    </div>

  )
}

export default TrafficLight


import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'


const Circles = (props) => {
  const [displayedCircles, setDisplayedCircles] = useState([0, 1, 2]);

  const handleClick = () => {
    setDisplayedCircles(prevDisplayedCircles => {
      if(prevDisplayedCircles[0] === 0) {
        return [3, 4, 5];
      } else {
        return [0, 1, 2];
      }
    });
  };

  return (
    <div className="circles-container">
      {
        props.text.map((el, index) => (
        displayedCircles.includes(index) && (
            <div className={`circle ${index === 0 ? "white" : ""}`} key={index}>
              <div className="circle-title">{el}</div>
            </div>
        )
        ))
      }
      <button onClick={handleClick}><FontAwesomeIcon  icon={faArrowDown} /></button>
    </div>
  );
};

export default Circles;

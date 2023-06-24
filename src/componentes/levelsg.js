import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {useNavigate}  from 'react-router'



const Levelsg = (props) => {

  const navigate = useNavigate();
  const hs = () => { navigate('/sublevels')}
  

  const [displayedDivs, setDisplayedDivs] = useState([0, 1, 2]);

  const handleClick = () => { 

    if(displayedDivs[0] === 0){

    setDisplayedDivs([3, 4, 5])

  }else{

    setDisplayedDivs([0, 1, 2])

  }


  }

  return (
    <>
    {props.text.map((el, index) => (
      displayedDivs.includes(index) && (
        <div className="circulog" key={index} onClick={hs} >
          <div 
            className={`circulop ${index !== 0 ? 'grey' : ''}`}
          >
            <h1 className="textcircle">{el}</h1>
          </div>
        </div>
      )
    ))}

    <button className='bnext' onClick={handleClick}><FontAwesomeIcon  icon={faArrowRight} /> </button>
  </>
);
};

export default Levelsg;

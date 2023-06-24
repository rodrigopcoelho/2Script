import React from 'react'
import { Gameboy1 } from '../style/gameboy1'
import { useNavigate } from 'react-router-dom';


const Gameboylogin = () => {

  const navigate = useNavigate();
  const bs = () => { navigate('/jogo')}
  
 
  return (
    <>
    <div onClick={bs}>
    
    <Gameboy1  src={require('../img/gameboy1.PNG')}/>
    
    </div>
    </>
  )
}

export default Gameboylogin

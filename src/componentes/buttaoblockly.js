import React from 'react'
import {useNavigate } from "react-router";

const Buttaoblockly = () => {
    const navigate = useNavigate();

    const hs = () => { navigate('/blockly')}


  return (
    <button className='virus' onClick={hs}> VÍRUS</button>
  )
}

export default Buttaoblockly
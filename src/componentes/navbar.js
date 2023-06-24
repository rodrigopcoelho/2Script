import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const navigate = useNavigate();
  const hs = () => { navigate('/home')}

  return (
    <div className='navbar' onClick={hs} >
        
        <div className='minisquare1'/>
        <div className='mainsquare'>2script</div>
        <div className='minisquare2'/>


    </div>
  )
}

export default Navbar
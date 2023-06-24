import React from 'react'
import BotaoG from '../componentes/botaoG'
import BotaoP from '../componentes/botaoP'
import Gameboylogin from '../componentes/gameboylogin'
import Logologin from '../componentes/logologin'
import Squareback from '../componentes/squareback'





const Login = () => {
  
  return (
    <div>
      <Gameboylogin/>
      <Logologin/>
      <BotaoP/>
      <BotaoG/>
      <Squareback/>
    </div>
  )
}

export default Login
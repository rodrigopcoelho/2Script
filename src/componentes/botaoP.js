import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import {Botaop} from '../style/botoesp'


const BotaoP = () => {

    
  return (
    <>
    <div > 
        <Botaop top={'338px'}>   <FontAwesomeIcon  icon={faUser} /> </Botaop> 
 
    </div>
    
    <div > 
        <Botaop top={'522px'}> <FontAwesomeIcon  icon={faLock} /> </Botaop> 
        
    </div>
    
    </>
  )
}

export default BotaoP
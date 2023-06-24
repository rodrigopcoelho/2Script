import React from 'react'
import {Botaoq} from '../style/botaoquadrado'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faList} from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { faCrown} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'


const Botoesquadrados = () => {

    const navigate = useNavigate();
    
    const hs = () => { navigate('/levels')}
    const as = () => { navigate('/conta')}
    
    const cs = () => { navigate('/materia')}
    const ds = () => {navigate('/board') }

  return (
    <div>
        <Botaoq top={'190px'} left={'799px'} width={'208px'} height={'243px'} background={'#C1A7E2'} onClick={as}> 
        <FontAwesomeIcon  icon={faUser} />
        <p>CONTA</p>
        
        </Botaoq>
        <Botaoq top={'227px'} left={'1048px'} width={'161px'} height={'257px'} background={'#F7BB5D'} onClick={hs}> 
        <FontAwesomeIcon  icon={faList} />
        <p >QUIZ</p>
        
        </Botaoq>
        <Botaoq top={'457px'} left={'801px'} width={'239px'} height={'209px'} background={'#65A0E0'} onClick={cs}> 
        <FontAwesomeIcon  icon={faBook} />
        <p>MATÉRIA</p>
        
        </Botaoq>
        <Botaoq top={'519px'} left={'1068px'} width={'289px'} height={'200px'} background={'#EAB5D9'} onClick={ds}> 
        <FontAwesomeIcon  icon={faCrown} />
        <p>BOARD</p>
        
        </Botaoq>

        

    </div>
  )
}

export default Botoesquadrados
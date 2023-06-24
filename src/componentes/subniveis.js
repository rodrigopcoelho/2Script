import React from 'react'
import {Subquadrados} from '../style/quadradossub'
import {Subquadradoswhite} from '../style/quadradossubwhite'
import { useNavigate } from 'react-router'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLock} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';



const Subniveis = () => {

    const navigate = useNavigate();

    const [completedLevels, setCompletedLevels] = useState([0]);

    const handleClick = (index) => {
       
        setCompletedLevels([...completedLevels, index])
        navigate('/quiz/1')
    }
  return (
    <>

    <Subquadrados top={'68px'} left={'67px'} color={completedLevels.includes(0) ? '#F7BB5D' : '#00e600'} onClick={() => handleClick(0)}  >  

        <Subquadradoswhite > 

    
            <h1 className='subtext unlock' >Criar<br/> Variáveis</h1>


        </Subquadradoswhite>

    </Subquadrados> 

    <Subquadrados top={'502px'} left={'67px'} color={completedLevels.includes(1) ? '#00e600' : '#C3C3C3'}  >  

        <Subquadradoswhite > 

            <div >

                <h1 className='subtext lock'>Verdadeiro<br/> e Falso</h1>
                {!completedLevels.includes(1) && <p className='subtext lock' ><FontAwesomeIcon  icon={faLock} /></p> }
                
                
            </div>

        </Subquadradoswhite>

    </Subquadrados> 

    <Subquadrados top={'68px'} left={'1102px'} color={completedLevels.includes(1) ? '#00e600' : '#C3C3C3'} >  

        <Subquadradoswhite > 
          
            <div >

            <h1 className='subtext lock' >Usar<br/> Variáveis</h1>
            {!completedLevels.includes(2) && <p className='subtext lock' ><FontAwesomeIcon  icon={faLock} /></p> }
              

            </div>

        </Subquadradoswhite>
    
    </Subquadrados> 

    <Subquadrados top={'502px'} left={'1102px'} color={completedLevels.includes(1) ? '#00e600' : '#C3C3C3'} >  

        <Subquadradoswhite > 
       
          
            <div >

                <h1 className='subtext lock'> Operadores<br/> de<br/>Comparação</h1>
                {!completedLevels.includes(3) && <p className='subtext lock' ><FontAwesomeIcon  icon={faLock} /></p> }
                

            </div>

        </Subquadradoswhite>
    
    </Subquadrados> 

    </>
  )
}

export default Subniveis
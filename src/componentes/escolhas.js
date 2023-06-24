import React, {useEffect, useState} from 'react'
import { Opcao } from '../style/escolha'
import { useNavigate } from 'react-router'



const Escolhas = (props) => {
  const[color, setColor] = useState('')
  const navigate = useNavigate();
  useEffect(() => {
    setColor('')
  }, [props.id]) 
 
  return (
    <Opcao style={{borderColor: color}}>
        <h1 style={{color: color}}className='choice-text ' onClick={() => {props.onClick(); 

        if(props.onClick() === true){
          setColor("#24FF00")
          setTimeout(() => {
        
            navigate(`/quiz/${props.id+1}`);
            if(props.id===3){
              navigate(`/write`);
            }
           
        
        
          }, 2000)
        } else {
          setColor("#E71D36")
        }; }}>{props.text}</h1>
    </Opcao>
  )
}

export default Escolhas
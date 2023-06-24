import React from 'react'
import { Botao } from '../style/botoes'
import { useNavigate } from "react-router";
import { Input } from '../style/forms'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-confi';
import {useState} from 'react';




const BotaoG = () => {
  
  const navigate = useNavigate();

  const [color, setColor] = useState('');

  function right() {
    setColor('green');
  }

  function wrong() {
    setColor('red');
  }


  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");



  const login = async () =>{

    try{
      const user = await signInWithEmailAndPassword (
        auth,
        loginEmail,
        loginPassword

      );

      console.log(user);
      right()


      setTimeout(() => {
        navigate('/home')
  
    
      }, 2000)
      
      
      
    }catch(error){
      console.log("erro");
      wrong()

    }

  }

  

    
  return (
    <>
    <Input top={'537px'} type="password" placeholder="Password" onChange={(event)=>{
      setLoginPassword(event.target.value);
    }} />
    <Input top={'350px'} type="text" placeholder="Email" onChange={(event)=>{
      setLoginEmail(event.target.value);
    }}   />

    <Botao left={'627px'} onClick={login} style={{backgroundColor: color }}> LOGIN</Botao>
    <Botao  left={'1047px'}> SIGNUP</Botao>
    </>
    
  )
}

export default BotaoG;
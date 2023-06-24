import React from 'react'
import Gameboy2 from '../componentes/gameboy2'
import Navbar from '../componentes/navbar'
import Levelsg from '../componentes/levelsg'
import Buttaoblockly from '../componentes/buttaoblockly'


/* import Butaonl from '../componentes/butaonl' */

const Levels = () => {



  const arr = [
    "Básicos de Javascript",

    "Comparações e Operadores Lógicos", 

    "Estruturas de Decisão", 

    "Leitura e escrita via DOM ", 

    "Eventos", 

    "Criar/invocar funções "

]


  return (
    <>
    <Navbar/>


   <Levelsg  text={arr}/>
      

      
    
    <Buttaoblockly/>


    <Gameboy2/>
    
    
    </>
  )
}

export default Levels
import React from 'react'
import { Stylegameboy2 } from '../style/stylegameboy2'
import Navbar from '../componentes/navbar'
import Info from '../componentes/info'
import Circles from '../componentes/circles'


const Account = () => {
  const arr = [
    "Básicos de Javascript",

    "Comparações e Operadores Lógicos", 

    "Estruturas de Decisão", 

    "Leitura e escrita via DOM ", 

    "Eventos", 

    "Criar/invocar funções "

]
console.log(1)
  return (
    <>
    <Navbar/>
    <Info/>
    <Circles text={arr}/>
    <Stylegameboy2 src={require('../img/gameboy2.PNG')} left={'633px'}/>
    </>
  )
}

export default Account
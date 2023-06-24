import React from 'react'
import Escolhas from '../componentes/escolhas'
import Pergunta from '../componentes/pergunta'
import '../style/quizstyle.css'
import { Stylegameboy2 } from '../style/stylegameboy2'
import { useParams } from 'react-router'



const Quiz = () => {

    const {id}= useParams();

    const arr = [

        ["what will be the declared value in the console: var num = 8; var num = 10; console.log(num);", {
            choice1: "8",
            choice2: "undefined",
            choice3: "10",
            choice4: "num",
            answer: 2}],

        ["What are Variables?", {
            choice1: "Variables are containers for storing data (storing data values).",
            choice2: "It's a data type, It can only take the values true or false.",
            choice3: "Variables are blocks of code designed to perform a particular task.",
            choice4: "Variables are for storing and manipulating text.",
            answer: 0}],

        ["Which of the following names cannot be used to define a variable in Javascript:", {
            choice1: "variableName",
            choice2: "_variableName",
            choice3: "$variableName",
            choice4: "2variableName",
            answer: 3}]

    ]

    




  return (



   <>

    <Pergunta texto={arr[id-1][0]}/>

<div className='divchoice'>

    {Array.from(Object.values(arr[id-1][1])).slice(0,4).map((el, index)=>{
            return <Escolhas key= {index} text={el} onClick={()=>{if(index === arr[id-1][1].answer)
                {
                      return true
                     
                } else{
                    return false
                }; } } id={+id}/>
        })
        } 
    
</div>


    <Stylegameboy2 src={require('../img/gameboy2.PNG')} left={'633px'}/>

   </>

  )
}

export default Quiz

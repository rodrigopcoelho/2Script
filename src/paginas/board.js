import React from 'react'
import Navbar from '../componentes/navbar'
import Gameboylogin from '../componentes/gameboylogin'
import BoardScore from '../componentes/boardscore'

const board = () => {
  return (
    <>
    <Navbar></Navbar>
    <Gameboylogin />
    <BoardScore></BoardScore>
    
    </>
  )
}

export default board
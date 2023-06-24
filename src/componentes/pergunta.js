import React from 'react'

const Pergunta = (props) => {
  return (
    <div className='questionbox'>

    <h3 id="progressText" className="questiontext">
              {props.texto}
    </h3>

    </div>
  )
}

export default Pergunta
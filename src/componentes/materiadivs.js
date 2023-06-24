import React from 'react'
import {useState} from 'react';
import data from '../materiaapi/data';

const Materiadivs = () => {

    const [isShown, setIsShown] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleTitleClick = (id) => {
      setSelectedId(id);
      setIsShown(!isShown);
    }

  return (
    <>
    <div className="divmateria">
      {data.materia.map((item) => (
      <>
        <div key={item.id} onClick={() => handleTitleClick(item.id)}>
          <h1>{item.titulo}</h1>

        </div>
      </>
      ))}
    </div>

  <div className='divescondida'>
    {isShown && ( data.materia.filter((item) => item.id === selectedId)
          .map((item) => (
            <div key={item.id}>
              <p>{item.texto}</p>
              
              {item.id===13 && <img className="imagemmateria" src={require("../materiaapi/"+item.imagem)} />}
              <p>{item.texto2}</p>
            </div>

  ))


      )}

</div> 
   

    </>
  )
}

export default Materiadivs
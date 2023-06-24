import React, {useState,useEffect}  from 'react'
import {getInfo} from "../firebase-confi.js"


const Boardscore = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    getInfo().then((users) => {
      setUsersList(users);
    });
  }, []);


  return (
    <>
      <h1 className='hightitle'>HIGH SCORES</h1>

      <div className='boardSquare'>
        <div className='boardTitle'>
          <h1 className='tituloboard t1'>RANK</h1>
          <h1 className='tituloboard t2'>GAMER</h1>
          <h1 className='tituloboard'>SCORE</h1>
        </div>

        
        {usersList.sort((a, b) => a.score - b.score)
        .map((player, index) => {
          return (
            <div className='playdiv' key={index}>
              <h1 className='playerpo t11'>{index + 1}</h1>
              <img className='boardphoto t22' src={player.foto} />
              <h1 className='playersco'>{player.score}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Boardscore;

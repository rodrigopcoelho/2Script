import React, {useState,useEffect}  from 'react'
import {getInfo} from "../firebase-confi.js"




const Info = () => {
  

  const [usersList, setUsersList] = useState([]);


  useEffect(() => {

    
    getInfo().then((users) => {

      console.log(users[0]);
      setUsersList(users);

    });
  }, []);

  return (
<>
    <div className='geralinfo'>
        <h1 style={{fontSize:"48px"}}className="para1">{usersList[0] && usersList[0].nome}</h1>
        <h1 style={{textAlign:"right", fontSize:"30px",}} className="para2">{usersList[0]  && usersList[0].email}</h1>
        <h1 style={{textAlign:"right", fontSize:"30px"}} className="para3">{usersList[0]  && usersList[0].meca}</h1>
        <h1 style={{textAlign:"right", fontSize:"30px"}} className="para4">{usersList[0]  && usersList[0].rank}</h1>

        
        
    </div>

    <img className='profilephoto ' src={usersList[0]  && usersList[0].foto}  />
    
</>
  )
}

export default Info
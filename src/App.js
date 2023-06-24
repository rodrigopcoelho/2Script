import React from 'react';
import Login from './paginas/login';

import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './paginas/homepage'
import Levels from './paginas/levels'
import Sublevels from './paginas/sublevels'
import Quiz from './paginas/quiz';
import Account from './paginas/account';
import Write from './paginas/write';
import Jogo from './paginas/jogo';
import Blockly from './paginas/blocklypag';
import Materia from './paginas/materia';
import Board from './paginas/board';





function App() {
  return (
   
    <BrowserRouter>
      <Routes>
       
        <Route path='/' element ={<Login/>}/>
        <Route path='/home' element ={<Homepage/>}/>
        <Route path='/levels' element ={<Levels/>}/>
        <Route path='/sublevels' element ={<Sublevels/>}/>
        <Route path='/quiz/:id' element ={<Quiz/>}/>
        <Route path='/conta' element ={<Account/>}/>
        <Route path='/write' element ={<Write/>}/>
        <Route path='/jogo' element ={<Jogo/>}/>
        <Route path='/blockly' element ={<Blockly/>}/>
        <Route path='/materia' element ={<Materia/>}/>
        <Route path='/board' element ={<Board/>}/>
        


      </Routes>
    </BrowserRouter>
 
    
  );
}

export default App;

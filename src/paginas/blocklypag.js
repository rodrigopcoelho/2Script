import React, {useEffect} from 'react'
import Navbar from "../componentes/navbar"
import Blockly from "blockly"
import Wriimg from '../componentes/wriimg'


const Blocklypag = () => {
 const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      {
        "kind": "block",
        "type": "controls_if"
      },
      {
        "kind": "block",
        "type": "controls_repeat_ext"
      },
      {
        "kind": "block",
        "type": "logic_compare"
      },
      {
        "kind": "block",
        "type": "math_number"
      },
      {
        "kind": "block",
        "type": "math_arithmetic"
      },
      {
        "kind": "block",
        "type": "text"
      },
      {
        "kind": "block",
        "type": "text_print"
      }
    ]
  }

  useEffect(() => {
    Blockly.inject('blocklyDiv', {toolbox: toolbox})
  }, [])

  return (
    <div>
      <Navbar/>
      <Wriimg/>
    <div className="App blockly">
      <header className="App-header ">
       
        <div  id="blocklyDiv" style={{"height": 630+"px", "width": 600+"px" }}>
        

      </div>
      </header>

      
    </div>
    <div className="gene"></div>
    </div>
  );
}

export default Blocklypag
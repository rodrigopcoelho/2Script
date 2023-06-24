import React from 'react'
import { useNavigate } from 'react-router'

const Wriprinci = () => {
    const navigate = useNavigate();
  


    function veirifica(){
        var x = document.getElementById("text1").value;

        if(x==="10"||x===" 10"){
            console.log("acertou")

            setTimeout(() => {navigate('/sublevels')}, 2000)
            
    }else{
        console.log("errou")
    }

    }
    
  return (
    <>
    <div className='divpetext'><h1 className='perguntatxt'>Altera a variável “num” de modo o console.log seja 10 e não 8</h1></div>

    <div className='ecrapri'>

        <h1 className='texttowrite'> <span className='var'>var</span> <span className='num'>num</span> = <span className='oito'>8</span>; <br/> <br/><span className='var'>var</span> <span className='num'>num</span> = 
        <input className='inputt' type="text" id="text1" /> 
        ; <br/><br/><span className='console'>console</span>.<span className='log'>log</span><span className='aquelacoisa'>(</span><span className='num'>num</span><span className='aquelacoisa'>)</span>;</h1>
        <button className='butaofeito' type="button"  onClick={veirifica} >Feito?</button>

    </div>
    </>
  )
}

export default Wriprinci
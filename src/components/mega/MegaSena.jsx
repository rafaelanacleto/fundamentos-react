import React, { useState } from 'react'
import { DisplayResult } from './DisplayResult';

export const MegaSena = (props) => {
  
    const [intervalo, setIntervalo] = useState(props.intervalo);
  
    function setValor (e) {
        setIntervalo(e.target.value);
    }
  
    return (
    <div>
        <label htmlFor="intervalo"></label>
         <input type="number" value={intervalo} name="intervalo" id="intervalo" onChange={setValor} />
         <hr />
         <DisplayResult intervalo={intervalo} />
    </div>
  )
}

import React, { useState } from 'react'

export const Input = (props) => {

    const [valor, setValor] = useState('valor inicial');

    function quandoMudar(e){
        setValor(e.target.value);
    }

  return (
    <div>
        <input type="text" onChange={quandoMudar} value={valor}/>
        <input type="text" value={undefined} />
    </div>
  )
}

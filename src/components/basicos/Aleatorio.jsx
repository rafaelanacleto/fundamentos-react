import React from 'react'

export const Aleatorio = (props) => {
  
    const {min, max} = props;

    const numAleatorio = Math.random() * (max - min) + min;
    
    return (
    <div>O resultado Aleatorio entre {max} e {min} é  
        <strong> {numAleatorio.toFixed(3)} </strong>
    </div>
  )
}

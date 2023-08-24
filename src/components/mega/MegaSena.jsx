import React, { useState } from "react";

export const MegaSena = (props) => {
  const [intervalo, setIntervalo] = useState(props.intervalo);

  function setValor(e) {
    setIntervalo(e.target.value);
  }

  const minNumber = 1;
  const maxNumber = 50;
  const [resultados, setResultado] = useState(Array(props.intervalo || 6).fill(0));

  const generateUniqueRandomNumbers = (count, min, max) => {
    if (count > max - min + 1) {
      throw new Error(
        "A contagem de números únicos solicitada é maior do que o intervalo fornecido."
      );
    }

    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(randomNumber);
    }

    setResultado(Array.from(uniqueNumbers));

  };

  const liVar = resultados.map((resultado, index) => {
    return(
      <li key={index}>
          {resultado}
      </li>
    )
  });
 
  return (
    <div>
      <label htmlFor="intervalo"></label>
      <input
        type="number"
        value={props.intervalo}
        name="intervalo"
        id="intervalo"
        onChange={setValor}
      />
      <hr />
      <button
        onClick={() => {
          generateUniqueRandomNumbers(props.intervalo, minNumber, maxNumber);
        }}
      >
        Gerar numeros
      </button>
      <br />

        <ul>
          {liVar}
        </ul>

    </div>
  );
};

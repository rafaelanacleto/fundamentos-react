import React from "react";

export const DisplayResult = (props) => {
  
  const minNumber = 1;
  const maxNumber = 50;
  const numberOfRandomNumbers = props.intervalo;
  let resultado = new Array();

  function generateUniqueRandomNumbers(count, min, max) {
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

    resultado = Array.from(uniqueNumbers);

    return Array.from(uniqueNumbers);
  }

  return <div>
    <button onClick={generateUniqueRandomNumbers(numberOfRandomNumbers, minNumber, maxNumber)}>Gerar numeros</button>
    <span>
        {resultado}
    </span>
  </div>;
};

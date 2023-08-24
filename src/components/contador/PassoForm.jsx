import React from "react";

export const PassoForm = (props) => {
  return (
    <div>
      <div>
        <label htmlFor="passo">Passo</label>
        <input
          type="number"
          name="passo"
          id="passo"
          onChange={props.quandoMudar}
          value={props.passo}
        />
      </div>
    </div>
  );
};

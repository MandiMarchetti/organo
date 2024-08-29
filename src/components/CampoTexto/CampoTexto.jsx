import { useState } from "react";
import "./campoTexto.css";

export const CampoTexto = (props) => {
  // let valor = "";

  const [valor, setValor] = useState("Amanda Thomaz");

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
    console.log(valor);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        type="text"
        name="nome"
        placeholder={props.placeholder}
        required={props.obrigatorio}
      />
    </div>
  );
};

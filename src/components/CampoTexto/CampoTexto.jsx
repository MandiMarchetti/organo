import "./campoTexto.css";

export const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input type="text" name="nome" placeholder={props.placeholder} />
    </div>
  );
};

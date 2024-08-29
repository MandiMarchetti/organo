import "./formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = ["Programação", "Front-end", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"];

  const aoCriarCard = (evento) => {
    evento.preventDefault();
    console.log("Form enviado!");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoCriarCard}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" obrigatorio={true} />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" obrigatorio={true} />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" obrigatorio={true} />
        <ListaSuspensa label="Time" itens={times} obrigatorio={true} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;

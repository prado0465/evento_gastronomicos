import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Cadastro() {
  const navigate = useNavigate();
  const [cadastroSuccess, setCadastroSuccess] = useState(false);

  const handleCadastroClick = (event) => {
    event.preventDefault(); 
    setCadastroSuccess(true); 
    setTimeout(() => {
      navigate("/"); 
    }, 1000);
  };

  return (
    <div className="tela-cadastro">
      <h1>Tela de Cadastro</h1>
      {cadastroSuccess && <p className="success-message">Cadastrado com sucesso!</p>}
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar Senha" />
        <button className="esqueceu_2" type="submit" onClick={handleCadastroClick}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
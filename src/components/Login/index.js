import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLoginClick = (event) => {
    event.preventDefault(); 
    setLoginSuccess(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="tela-login">
      <h1>Tela de Login</h1>
      {loginSuccess && <p className="success-message">Logado com sucesso!</p>}
      <form>
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button className="esqueceu_2" type="submit" onClick={handleLoginClick}>Login</button>
      </form>
      <a className="esqueceu_1" href="/cadastro">Não tem uma conta? Cadastre-se</a>
      <a className="esqueceu_1" href="/">Esqueceu a senha?</a>
    </div>
  );
}

export default Login;
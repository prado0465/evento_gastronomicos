import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Login() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [attempts, setAttempts] = useState(5); 
  const [errors, setErrors] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

  
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser &&
      formData.email === storedUser.email &&
      formData.password === storedUser.senha
    ) {
      setLoginSuccess(true);
      setErrors("");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setAttempts((prevAttempts) => prevAttempts - 1);
      setErrors("Usuário ou senha incorretos.");

      if (attempts <= 1) {
        setErrors("Você atingiu o limite de tentativas. Faça o cadastro novamente.");
        setTimeout(() => {
          navigate("/cadastro");
        }, 1000);
      }
    }
  };

  return (
    <div className="tela-login">
      <h1>Tela de Login</h1>
      {loginSuccess && <p className="success-message">Logado com sucesso!</p>}
      {errors && <p className="error-message">{errors}</p>}
      
      <form>
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          value={formData.email}
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="password" 
          value={formData.password}
          onChange={handleChange}
        />
        <button className="esqueceu_2" type="submit" onClick={handleLoginClick}>
          Login
        </button>
      </form>
      
      <a className="esqueceu_1" href="/cadastro">Não tem uma conta? Cadastre-se</a>
      <a className="esqueceu_1" href="/">Esqueceu a senha?</a>
    </div>
  );
}

export default Login;
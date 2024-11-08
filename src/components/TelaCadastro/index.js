import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Cadastro() {
  const navigate = useNavigate();
  const [cadastroSuccess, setCadastroSuccess] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    confirmEmail: "",
    senha: "",
    confirmSenha: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCadastroClick = (event) => {
    event.preventDefault();
    const newErrors = {};

   
    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = "Este campo é obrigatório.";
      }
    }

    if (formData.email !== formData.confirmEmail) {
      newErrors.email = "Os emails não coincidem.";
    }

    if (formData.senha !== formData.confirmSenha) {
      newErrors.senha = "As senhas não coincidem.";
    }

    const existingUser = JSON.parse(localStorage.getItem("userData"));
    if (existingUser && existingUser.email === formData.email) {
      newErrors.email = "Email já cadastrado.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    setErrors({});
    setCadastroSuccess(true);

    localStorage.setItem("userData", JSON.stringify({
      nome: formData.nome,
      email: formData.email,
      senha: formData.senha
    }));

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="tela-cadastro">
      <h1>Tela de Cadastro</h1>
      {cadastroSuccess && <p className="success-message">Cadastrado com sucesso!</p>}
      <form>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleChange}
        />
        {errors.nome && <p className="error-message">{errors.nome}</p>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input
          type="email"
          name="confirmEmail"
          placeholder="Confirmar Email"
          onChange={handleChange}
        />
        {errors.confirmEmail && <p className="error-message">{errors.confirmEmail}</p>}

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleChange}
        />
        {errors.senha && <p className="error-message">{errors.senha}</p>}

        <input
          type="password"
          name="confirmSenha"
          placeholder="Confirmar Senha"
          onChange={handleChange}
        />
        {errors.confirmSenha && <p className="error-message">{errors.confirmSenha}</p>}

        {Object.keys(errors).length > 0 && (
          <p className="error-message">Campos obrigatórios não preenchidos ou inválidos.</p>
        )}

        <button className="esqueceu_2" type="submit" onClick={handleCadastroClick}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastro;

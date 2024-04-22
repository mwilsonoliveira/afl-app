import React, { useState } from "react";
import { useAuth } from "../context";

const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Envie as credenciais para o backend para autenticação
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-100">
      <h3 className="mb-5 text-primary">Faça seu login</h3>

      <div className="mb-4 input-group-lg">
        <input
          type="email"
          className="form-control border"
          id="username"
          value={username}
          aria-describedby="emailHelp"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="lorem@ipsum.com"
        />
      </div>

      <div className="mb-3 input-group-lg">
        <input
          type="password"
          className="form-control border"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="***********"
        />
      </div>

      <div className="d-flex flex-row justify-content-between mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked
            disabled
          />
          <label className="form-check-label">Lembrar-me</label>
        </div>

        <p>
          <a className="link-opacity-75-hover text-info" href="#">
            Esqueci minha senha
          </a>
        </p>
      </div>

      <button
        type="submit"
        className="btn btn-secondary w-100 btn-lg text-white"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;

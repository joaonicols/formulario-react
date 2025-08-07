import React, { useState } from "react";

function Cadastro_Cliente() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCEP] = useState("");

  const [user, setUser] = useState({});

  function cadastrarClientes(e) {
    e.preventDefault();
    setUser({
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      rua: rua,
      complemento: complemento,
      cidade: cidade,
      estado: estado,
      cep: cep,
    });
  }

  return (
    <div>
        <h1>Formulário de Cadastro de Clientes</h1>
        <form onSubmit={cadastrarClientes}>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          placeholder="Digite seu nome:"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <input
          placeholder="Sobrenome:"
          type="text"
          id="sobrenome"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          />
          <br />

        <label htmlFor="email">E-mail</label>
        <input
          placeholder="exemplo@exemplo.com"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />

        <label htmlFor="telefone">Número de Telefone:</label>
        <input
          placeholder="(000) 000-0000"
          type="number"
          id="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          />
          <br />
        </form>
    </div>
  )
}

export default Cadastro_Cliente

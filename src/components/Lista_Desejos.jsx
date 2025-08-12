import React, { useEffect, useState } from "react";

function Lista_Desejos() {
  const [desejos, setDesejos] = useState([]);
  const [maisDesejado, setMaisDesejado] = useState("");
  const [input, setInput] = useState([]);
  useEffect(() => {
    const desejosStorage = localStorage.getItem("@desejos");
    if (desejosStorage) {
      setDesejos(JSON.parse(desejosStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@desejos", JSON.stringify(desejos));
  }, [desejos]);

  function cadastrarListaDesejos(e) {
    if (input === "") return;
    e.preventDefault();
    setDesejos([...desejos, input]);
    setInput("");
  }

  function desejoMaisDesejado(item) {
    setMaisDesejado(item);
  }

  return (
    <div>
      <h1>Lista de Desejos</h1>
      <form onSubmit={cadastrarListaDesejos}>
        <label htmlFor="nome">Item mais desejado:</label>
        <input
          placeholder="Digite um desejo"
          type="text"
          id="desejos"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <div>
        <ul>
          {desejos.map((item) => (
            <li
              onClick={() => desejoMaisDesejado(item)}
              style={{ fontWeight: item === maisDesejado? "bold": "normal" }}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lista_Desejos;

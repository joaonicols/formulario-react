import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>Eu estou renderizando {count} vezes!</h1>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);

export default Timer
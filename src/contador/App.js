import { useState } from "react"
import "../App.css"


export default function Contador() {
  const [numero, setNumero] = useState(0);
  

  const limiteMinimo = -10000;
  const limiteMaximo = 10000;

  const alterarNumero = (valor) => {
    if (numero + valor > limiteMaximo) {
      setNumero(limiteMaximo);
    } else if (numero + valor < limiteMinimo) {
      setNumero(limiteMinimo);
    } else {
      setNumero(numero + valor);
    }
  };

  const corNumero = () => {
    if (numero > 0) {
      return "greenyellow";
    } else if (numero < 0) {
      return "crimson";
    } else {
      return "black";
    }
  };

  return (
    <section className="conteiner">
    <section className="Tittle">
      <h1>Contador</h1>
    </section>
    <section className="numero" style={{ color: corNumero() }}>
      <p>{numero}</p>
    </section>
    <section className="btnPositivo">
      <button onClick={() => alterarNumero(1000)}>+1000</button>
      <button onClick={() => alterarNumero(500)}>+500</button>
      <button onClick={() => alterarNumero(100)}>+100</button>
      <button onClick={() => alterarNumero(50)}>+50</button>
      <button onClick={() => alterarNumero(10)}>+10</button>
      <button onClick={() => alterarNumero(5)}>+5</button>
      <button onClick={() => alterarNumero(1)}>+1</button>
    </section>
    <section className="btnZerar">
      <button onClick={() => setNumero(0)}>0</button>
    </section>
    <section className="btnNegativo">
      <button onClick={() => alterarNumero(-1000)}>-1000</button>
      <button onClick={() => alterarNumero(-500)}>-500</button>
      <button onClick={() => alterarNumero(-100)}>-100</button>
      <button onClick={() => alterarNumero(-50)}>-50</button>
      <button onClick={() => alterarNumero(-10)}>-10</button>
      <button onClick={() => alterarNumero(-5)}>-5</button>
      <button onClick={() => alterarNumero(-1)}>-1</button>
    </section>
  </section>
);
}
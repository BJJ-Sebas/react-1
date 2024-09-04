import { useState } from "react"
import "../App.css"
export default function Contador() {

  const [numero, setNumero] = useState(0);

  const corNumero = () => {
    if (numero > 0) {
      return "greenyellow";
    } else if (numero < 0) {
      return "crimson";
    } else {
      return "black";
    }
  };


  function maismil() {
    setNumero(numero + 1000)
  }
  function maisquinhentos() {
    setNumero(numero + 500)
  }
  function maiscem() {
    setNumero(numero + 100)
  }
  function maiscinquenta() {
    setNumero(numero + 50)
  }
  function maisdez() {
    setNumero(numero + 10)
  }
  function maiscinco() {
    setNumero(numero + 5)
  }
  function maisum() {
    setNumero(numero + 1)
  }
  function menosmil() {
    setNumero(numero - 1000)
  }
  function menosquinhentos() {
    setNumero(numero - 500)
  }
  function menoscem() {
    setNumero(numero - 100)
  }
  function menoscinquenta() {
    setNumero(numero - 50)
  }
  function menosdez() {
    setNumero(numero - 10)
  }
  function menoscinco() {
    setNumero(numero - 5)
  }
  function menosum() {
    setNumero(numero - 1)
  }
  function zerar() {
    setNumero(numero - numero)
  }

  
  return (
    <section className="conteiner">
      <section className="Tittle">
      <h1>Contador</h1>
      </section>
      <section className="numero" style={{ color: corNumero() }}>
        <p>{numero}</p>
      </section>
      <section className="btnPositivo">
        <button onClick={maismil}>+1000</button>
        <button onClick={maisquinhentos}>+500</button>
        <button onClick={maiscem}>+100</button>
        <button onClick={maiscinquenta}>+50</button>
        <button onClick={maisdez}>+10</button>
        <button onClick={maiscinco}>+5</button>
        <button onClick={maisum}>+1</button>
      </section>
      <section className="btnZerar">
       <button onClick={zerar}>0</button>
      </section>
      <section className="btnNegativo">
      <button onClick={menosmil}>-1000</button>
      <button onClick={menosquinhentos}>-500</button>
      <button onClick={menoscem}>-100</button>
      <button onClick={menoscinquenta}>-50</button>
      <button onClick={menosdez}>-10</button>
      <button onClick={menoscinco}>-5</button>
      <button onClick={menosum}>-1</button>
      </section>
    </section>
  );
}
import React, { useState } from 'react';
import './style.css';

export default function PaginaInicial() {
  const [numeroAleatorio, setNumeroAleatorio] = useState(0);
  const [ValorMax, setValorMax] = useState(100);
  const [ValorMin, setValorMin] = useState(0);

  function BotaoMax() {
    var ValorMaximo = document.getElementById('max').value
    setValorMax(Number(ValorMaximo));

  };
  function BotaoMin() {
    var ValorMinimo = document.getElementById('min').value
    setValorMin(Number(ValorMinimo));
  };
  function gerarNumero() {
    const newNumber = Math.floor(Math.random() * (ValorMax - ValorMin + 1)) + +ValorMin;
    setNumeroAleatorio(newNumber);
    if (ValorMax < ValorMin) {
      alert('Max value should be higher than Min value')
      setNumeroAleatorio('Error')
    };
  };

  return (
    <div className="conteudo-centralizado">
      <h3>Random Number:</h3>
      <div className="divNum">
      </div>

      <div>
        <input type="number" id='min' min='1' max='9999' placeholder="Número Mínimo" onChange={BotaoMin} />
        <input type="number" id='max' min='1' max='9999' placeholder="Número Máximo" onChange={BotaoMax} />
      </div>
      <h1>{numeroAleatorio}</h1>

      <div className='area-botao'>
        <label>
          Click on the following button to get a random number:
        </label>

        <button onClick={gerarNumero}>
          Generate Number
        </button>
      </div>
    </div>
  );
}
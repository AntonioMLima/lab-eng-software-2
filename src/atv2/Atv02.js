import { useState } from "react"
import Contador from "./Contador.js";
import ReiniciarCont from "./ReiniciarCont.js";
import "./Atv02.css";
import { Link } from "react-router-dom";




export default function Atv02() {
  let [contadorHomem, setContadorHomem] = useState(0);
  let [contadorMulher, setContadorMulher] = useState(0);
  let [total, setTotal] = useState(0);

  
  function encrMulher() {
    setContadorMulher(contadorMulher += 1)
    setTotal( total += 1);
  }
  
  function encrHomem() {
    setContadorHomem(contadorHomem += 1)
    setTotal( total += 1);
  }
  
  function decrMulher() {
    if (contadorMulher > 0) {
      setContadorMulher(contadorMulher -= 1)
      setTotal( total -= 1);
    }
  }
  
  function decrHomem() {
    if (contadorHomem > 0) {
      setContadorHomem(contadorHomem -= 1)
      setTotal( total -= 1);

    }
  }

  function reiniciarContagens() {
    setContadorHomem(0)
    setContadorMulher(0)
    setTotal(0)
  }
  
  return (
      <>
          <div className="page-container">
      <div className="card">
        <div className="reiniciar-btn">
          <ReiniciarCont funcao={reiniciarContagens}/>
        </div>

        <p className="total-label">Total:</p>
        <div className="total-numero">{total}</div>

        <div className="contadores">
          <Contador
            g="h"
            quantidade={contadorHomem}
            funcaoInc={encrHomem}
            funcaoDec={decrHomem}
          />
          <Contador
            g="m"
            quantidade={contadorMulher}
            funcaoInc={encrMulher}
            funcaoDec={decrMulher}
          />
        </div>
      </div>
    </div>

    <div>
      <Link to="../" className="back-link">
        Voltar à página inicial
      </Link> 
    </div>
      </>
    
    );
  }
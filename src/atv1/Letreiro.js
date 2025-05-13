
import { useState, useEffect } from 'react';
import './Letreiro.css';

function Letreiro() {

  const [frase, setFrase] = useState('Conheça a Fatec');
  const fraseInteira = "Conheça a Fatec"



   useEffect(() => {
        setFrase(fraseInteira.substring(0,0))

        let n = 0

        const intervalo = setInterval(function digitar() {
          setFrase(fraseInteira.substring(0,n));
          n = n + 1;
          if (n > fraseInteira.length ) {
            n = 0;
          }
        }, 500);

        return () => clearInterval(intervalo);
  
      }, []);
  return (
    <>
    <div className="letreiro">{frase}</div>
    </>
  );
}

export default Letreiro;

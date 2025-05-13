import { IoIosWoman } from "react-icons/io";

import { IoIosMan } from "react-icons/io";
import { IconContext } from "react-icons";

import BotaoAdd from "./botaoAdd";
import BotaoSub from "./BotaoSub";
import './Contador.css';

export default function Contador({g, quantidade, funcaoInc, funcaoDec}) {
  
  let genero;
  let cor;
  if (g == "h") {
    genero = <IoIosMan/>
    cor = "darkblue"
  } else if (g == "m")  {
    genero = <IoIosWoman/>
    cor = "deeppink"
  }
  
  return (
        
      <>
          <div className="contador-container">
      <IconContext.Provider value={{ color: cor, size: "10em" }}>
        <div className="icone-genero">
          {genero}
        </div>
      </IconContext.Provider>

      <div className="contador-quantidade">{quantidade}</div>

      <div className="botoes">
        <div onClick={funcaoInc}>
          <BotaoAdd />
        </div>
        <div onClick={funcaoDec}>
          <BotaoSub />
        </div>
      </div>
    </div>

      </>
    );
  }
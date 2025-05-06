
import { Link } from "react-router-dom";
import Letreiro from "./Letreiro" 
import Relogio from "./Relogio";
import "./Atv01.css";

export default function Atv01() {
    return(
        <>
        <div className="atv01-container">
          <Letreiro />
          <Relogio />  
          <Link to="../" className="back-link">
        Voltar à página inicial
      </Link> 
            
        </div>
        </>
          
    );

}


import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { IconContext } from "react-icons";
import "./Botao.css";

export default function BotaoAdd() {
  return (
    <>
      <IconContext.Provider value={{ color: "green",  size: "3em" }}>
 
          <CiSquarePlus/>
     
      </IconContext.Provider>
    </>
  );
}
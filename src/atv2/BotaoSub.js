
import { CiSquareMinus } from "react-icons/ci";
import { IconContext } from "react-icons";
import "./Botao.css";

export default function BotaoSub() {
  return (
    <>
      <IconContext.Provider value={{ color: "red", size: "3em" }}>

          <CiSquareMinus/>

      </IconContext.Provider>
    </>
  );
}
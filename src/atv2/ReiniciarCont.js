import { MdRestartAlt } from "react-icons/md";
import { IconContext } from "react-icons";

export default function ReiniciarCont({funcao}) {
    return(

    <IconContext.Provider value={{  size: "3.5em"}}>
        <div onClick={funcao}>
          <MdRestartAlt/>
        </div>
      </IconContext.Provider>


    )
}
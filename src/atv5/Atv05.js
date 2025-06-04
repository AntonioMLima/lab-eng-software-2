import Accordion from "./Accordion";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Messenger from "./Messenger";
import { Link } from "react-router-dom";





export default function Atv4() {
    return (
        <>  
           <FormQuiz/>
           <FormTicket/>
           <Accordion/>
           <Messenger/>
           <div>
      <Link to="../" className="back-link">
        Voltar à página inicial
      </Link> 
    </div>
        </>
    )
}
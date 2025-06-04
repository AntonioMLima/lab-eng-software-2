import Avatar from "./Avatar";
import Gallery from "./Gallery";
import PackingList from "./PackingList";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";

export default function Atv03() {
    return (
        <>
        <Gallery />
        <TodoList />
        <Avatar/>
        <PackingList/>

        <div>
      <Link to="../" className="back-link">
        Voltar à página inicial
      </Link> 
    </div>
        </>
    )
}
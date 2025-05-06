import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return(
        <div className="app-container">
            <main className="main-content">
                <h1>Atividades de Lab. de Eng. de Software</h1>
                <div className="links-container">
                    <Link to="./Atv01" className="activity-link">Atividade 1</Link>
                    <Link to="./Atv02" className="activity-link">Atividade 2</Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
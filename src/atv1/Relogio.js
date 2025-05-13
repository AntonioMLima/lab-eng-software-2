import { useState, useEffect } from 'react';
import './Relogio.css';


function Relogio() {
    const [hora, setHora] = useState('00');
    const [minutos, setMinutos] = useState('00');
    const [segundos, setSegundos] = useState('00');
    //use state -> valores que mudam com o tempo no estado do componente

    const atualizarRelogio = () => {
        const dataAtual = new Date();
        const horas = String(dataAtual.getHours()).padStart(2, '0');
        const minutos = String(dataAtual.getMinutes()).padStart(2, '0');
        const segundos = String(dataAtual.getSeconds()).padStart(2, '0');

        setHora(horas);
        setMinutos(minutos);
        setSegundos(segundos);
    };

    useEffect(() => {


        atualizarRelogio();
        const intervalo = setInterval(atualizarRelogio, 1000);


        return () => clearInterval(intervalo); // intervalo é limpo quando componente for desmontado
    });
    //use effect -> lógica disparada quando componente é montado

    return (
        <div id="relogio">
            <span id="horas">{hora}</span>
            <span>:</span>
            <span id="minutos">{minutos}</span>
            <span>:</span>
            <span id="segundos">{segundos}</span>
        </div>
    );
}

export default Relogio
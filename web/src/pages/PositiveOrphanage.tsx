import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/pages/positive-orphanage.css';

import kidImg from '../images/kid-img.svg';

const PositiveOrphanage = () => {

    const history = useHistory();

    function goMap() {
        history.push('/map');
    }

    return (
        <div id="page-positive">
            <div className="content">
                <div className="left">
                    <h1>Ebaaaa!</h1>
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
                    <button onClick={goMap}>Voltar para o mapa</button>
                </div>
                <div className="right">
                    <img src={kidImg} alt="Olá"/>
                </div>
            </div>
        </div>

    );
}

export default PositiveOrphanage;
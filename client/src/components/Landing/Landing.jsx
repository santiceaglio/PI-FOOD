import React from 'react';
import '../../assets/styles/view/Landing.modules.css'
import { Link } from "react-router-dom";


function Landing() {
    return (
        <div className="landing-page">
            <h1>Bienvenidos a SoyHenry Food</h1>
            <p>¡Aquí encontrarás todo tipo de recetas para llevar los mejores manjares a tu mesa!</p>
            <Link to="/home">
                <button>Ver más</button>
            </Link>    
            </div>
    );
}

export default Landing;
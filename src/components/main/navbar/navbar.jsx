import 'modules/bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

import React from 'react';
import Logo from '../img/logo2.png';



export default props => (
    <div className="navbar-menu">
      <div className="container-img">
        <img src={Logo} alt="Lar são domingos"/>
        <h3>LAR SÃO DOMINGOS</h3>
      </div>
    </div>
)
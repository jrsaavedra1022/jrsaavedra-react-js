//Hacemos las imporataciones de react
import React from 'react';
import {Link} from 'react-router-dom';
//hacemos la importacion de la imagen
import './styles/Navbar.css';
import logo from '../images/logo.svg';

//craamos el componente 
class Navbar extends React.Component{
    //Hacemos el render
    render(){
        //retornamos el contenido del render
        return <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="logo" />
                <span className="font-weight-light">Platzi </span>
                <span className="font-weight-blod">conf</span> </Link>
            </div>
        </div>;
    }
}

//Hacemos la exportación del componente
export default Navbar;
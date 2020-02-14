import React from 'react';
//Hacemos las imporataciones de la imagen
import confLogo from '../images/badge-header.svg';
//importamos los estilos
import "./styles/Badge.css";


//creamos la clase
class Badge extends React.Component{
    
    
    //para regresar el resultado en pantalla
    render(){
        //variables para hacer el componente usable
       // const txtFirstName = 'snoppin';
    //const txtLastName = 'other_name';
    //valores de retorno
        return <div className="badge">
            <div className="badge_header" >
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="badge_section-name">
                <img className="badge_avatar" src={this.props.url_avatar} alt="Avatar"/>
                <h1>{this.props.txtFirstName} <br/> {this.props.txtLastName} </h1>
            </div>
            <div className="badge_section-info">
                <h6>{this.props.txtJobTitle}</h6>
                <p>{this.props.txtTwitter}</p>
            </div>
            <div className="badge_footer">
                Platzi conf
            </div>
        </div> ;
    }
}

//debemos exportar los componentes
export default Badge;
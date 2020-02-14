import React from 'react';
//importamos los componentes
import Navbar from './Navbar';
//creamos un funcion
function Layout(props){
   // const children = props.children;
    return (
        //para evitar divs ya que debemos retornar un solo elemento podemos utilizar la siguiente etiqueta
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
        );
    
}

export default Layout;
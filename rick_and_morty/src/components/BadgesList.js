import React from 'react';
//importaciones

//clase
class BadgeList extends React.Component{
    render(){
        //retornamos el contenido de la lista
        return (
        <ul className="list-unstyled">
        {
            this.props.badges.map( (badge)=>{
               return(
                    <li key={badge.id}>
                        <div className="card mt-2">
                            <div className="row">
                                <div className="col-4 mx-auto my-auto d-flex justify-content-center">
                                    <img src={badge.url_avatar} alt="foto" className="rounded-circle"/>
                                </div>
                                <div className="col-md-8 col-sm-8">
                                    <p><strong>{badge.txtFirstName} {badge.txtLastName}</strong></p>
                                    <a href={badge.txtTwitter}><i className="fa fa-user"></i>{badge.txtTwitter}</a>
                                    <p>{badge.txtEmail}</p>
                                    <p>{badge.txtJobTitle}</p>
                                </div>
                            </div>
                        </div>
                    </li>
               ); 
            })
        }
        </ul>
        );
    }
}
//exportamos el componente
export default BadgeList;
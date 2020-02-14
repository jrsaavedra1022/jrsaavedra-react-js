import React from "react";
//creamos el componente
class  BadgeForm extends React.Component{
    //Hacems el proceso de inicializar el estado de los campos
   // state = { //txtLastName: 'My second name', };
    //Hacemos el metodo de handle Cahnge
    hundleChange = (e) => {
        /*console.log({ 
            name: e.target.name,
            value: e.target.value});*/
            //para enviar el estado del objeto
            this.setState({
                //para hacer un array de los campos que necesitamos llenar
                [e.target.name]: e.target.value,
                //txtFirstName: e.target.value,
            });
    };
    hundleClick = (e) =>{
        console.log("The Button was Clicked");
        //Ahora el estado tiene todos los valores de los inputs
        console.log(this.state);
    };
    
    hundleSubmit = (e) => {
        e.preventDefault();
    
    };

    render(){
        return(
        <div>
            <h1>New Attendent</h1>
            <form onSubmit={this.hundleSubmit} >
            <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="txtFirstName" value={this.props.formValues.txtFirstName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="txtLastName" value={this.props.formValues.txtLastName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input onChange={this.props.onChange} className="form-control" type="email" name="txtEmail" value={this.props.formValues.txtEmail}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Job Title</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="txtJobTitle" value={this.props.formValues.txtJobTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Twitter</label>
                    <input onChange={this.props.onChange} className="form-control" type="text" name="txtTwitter" value={this.props.formValues.txtTwitter}/>
                </div>

                <button onClick={this.hundleClick} className="btn btn-primary" >Save</button>
            </form>
        </div>
        );
    }
}

//exportamo del Badge
export default BadgeForm;
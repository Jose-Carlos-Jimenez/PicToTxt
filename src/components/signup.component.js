import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";


export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            user:"",
            password:""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.user.length > 0;
    }

    async handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        try {
            const newUser = await Auth.signUp({
                username: this.state.user,
                attributes: {email:this.state.email},
                password: this.state.password,
            });
        } catch (e) {
            if(e.name){
                alert("El usuario ya existe.");
            }
            else{
                alert("Registrado con éxito.");
            }
            console.log("Excepción: ",e);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <h3>Registrarse</h3>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="text" className="form-control" placeholder="Ingrese usuario"
                        onChange={(e)=>this.setState({user:e.target.value})}
                        value={this.state.user}
                    />
                </div>

                <div className="form-group">
                    <label>Correo electrónico:</label>
                    <input type="email" className="form-control" placeholder="Ingrese correo electrónico" 
                        onChange={(e)=>this.setState({email:e.target.value})}
                        value={this.state.email}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Ingrese contraseña" 
                        onChange={(e)=>this.setState({password:e.target.value})}
                        value={this.state.password}
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={!this.validateForm()}>Registrarse</button>
                <p className="forgot-password text-right">
                    ¿Ya te <Link to={"/sign-in"}>registraste</Link>?
                </p>
            </form>
        );
    }
}
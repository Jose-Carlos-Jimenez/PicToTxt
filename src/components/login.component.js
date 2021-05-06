import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

export default class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            var res = await Auth.signIn(this.state.email, this.state.password);
            global.username = res.username;
            alert("Welcome " + global.username);
            this.props.history.push("home");
            this.props.show(true);            
        } catch (e) {
            alert(e.message);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <h3>Iniciar sesión</h3>

                <div className="form-group">
                    <label>Usuario</label>
                    <input type="user" className="form-control" placeholder="Ingrese usuario o correo electrónico"
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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">Recuérdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={!this.validateForm()}>Ingresar</button>
               
                <p className="forgot-password text-right">
                    ¿Aún no tienes <Link to={"/sign-up"}>cuenta</Link>?
                </p>
            </form>
        );
    }
}
import React, { Component } from 'react';
import ButtonLogin from './ButtonLogin';
import './Login.css';

class Login extends Component{

    render(){
        return(
            <section className="container-login">
                <form className="form-login">
                    <div className="form-group">
                        <label for="input-email">Correo</label>
                        <input type="email" className="form-control" id="input-email" placeholder="Ingresa tu correo"/>
                    </div>
                    <div className="form-group">
                        <label for="input-pass">Contraseña</label>
                        <input type="password" className="form-control" id="input-pass" placeholder="Contraseña"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <ButtonLogin />
            </section>
        );
    }
}
export default Login;
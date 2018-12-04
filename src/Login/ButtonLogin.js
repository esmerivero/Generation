import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ButtonLogin extends Component{
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(){
        this.props.history.replace('/home');
    }
    render(){
        return(
            <button onClick={this.handleLogin} type="submit" className="btn btn-primary">Inicia sesión</button>
        );
    }
}
export default withRouter(ButtonLogin);
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        this.props.history.replace('/login');
    }
    render(){
        return(
            <button onClick={this.handleLogout}>Cerrar sesión</button>
        );
    }
}
export default withRouter(ButtonLogout);
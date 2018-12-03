import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout';
import Map from './Map';

class Home extends Component{

    render(){
        return(
            <div>
            <ButtonLogout />
            <Map />
            </div>

        );
    }
}
export default Home;
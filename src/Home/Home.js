import React, { Component } from 'react';
import ButtonLogout from './ButtonLogout';
import Map from './Map';

// components
import Search from './Search';

class Home extends Component{
    constructor(props){
        super(props)

        this.handleCurrentPosition = this.handleCurrentPosition.bind(this);

        this.state = {
            latitude:19.43,
            longitude:-99.13
        }
    }

    handleCurrentPosition(coords){
        this.setState({
            latitude:coords.latitude,
            longitude:coords.longitude
        })       
    }

    render(){
        console.log(this.state);
        
        return(
            <div>
            <Search latitude={this.state.latitude} longitude={this.state.longitude} handleCurrentPosition={this.handleCurrentPosition}/>
            <ButtonLogout />
            </div>
        );
    }
}
export default Home;
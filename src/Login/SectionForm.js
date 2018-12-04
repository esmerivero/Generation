import React, { Component } from 'react';
import ButtonLogin from './ButtonLogin';
import './SectionForm.css';

class SectionForm extends Component{

    render(){
        return(
            <section className="back-img">
                <ButtonLogin />
            </section>
        );
    }
}
export default SectionForm;
import React, { Component } from 'react';

// estyles
import './Favorites.css'

class Favorites extends Component {
  render () {
    return (
      <section className='container fondo'>
        <article className='row	justify-content-end'>
          <div className='col-sm-12 col-md-6'>
            <section className=''>
              <p><i className="fas fa-trash"></i></p>
              <img src=''/>
              <section className=''>
                <p>Name</p>
                <p>Adress</p>
              </section>
            </section>          
          </div>
        </article>
      </section>
    )
  }

}

export default Favorites;
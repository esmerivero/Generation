import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

// estyles
import './Favorites.css'

class Favorites extends Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col className='fondo'  sm={10} md={6} >
          <div className=''>
            <section className=''>
              <p><i className="fas fa-trash"></i></p>
              <Image  src=''/>              
            </section>
            <section> 
              <p>
                Name
              </p>
              <p>
                Adress
              </p>
            </section>
            </div>
          </Col>
        </Row>
        </Grid>
    )
  }

}

export default Favorites;
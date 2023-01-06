import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Contactus = () => {
  return (
    <div>
      <h1 className="text-warning text-center mt-5 mb-3">Contact US</h1>
      <Container>
      <Row>
        <Col lg={6}>
        <h3 className="mt-5">We'd love to hear from you!</h3>
        <p>Have a question about the services we provide? Send us the details on the type of project you're looking to hire for, 
            and we'll be happy to get back to you with a free quote and information.</p>
        <Button>Message us on WhatsApp</Button>
        <h3 className="mt-3">JK Photography</h3>
        <p>Madipakkam, Chennai, Tamil Nadu, India</p>
        <p>6382475877</p>
        </Col>
        <Col lg={6}>
        <img src="https://img1.wsimg.com/isteam/stock/1177/:/rs=w:1160/qt=q:99" className="mt-3" style={{height:"50%"}}alt="img" />
        </Col>
      </Row>
      </Container>  
    </div>
  )
}

export default Contactus

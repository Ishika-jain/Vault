import React from 'react'
import  {Container, Button}  from 'react-bootstrap'
const About = () => {
  return (
    <div>
        <div className="content-container">
        <Container className="pt-5">
          <h1>Get Set Go!</h1>
          <br></br>
          <h4>Stay prepared for when Oppurtunity knocks.</h4>
          <br></br>
          <Button variant="warning" size='lg'>Join us here</Button>{' '}
        </Container>
      </div>
    </div>
  )
}

export default About
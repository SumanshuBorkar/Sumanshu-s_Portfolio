
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image2 from './../assets/img/Astro2.png';

function Contacts() {
    
    return (
      <>
      <section className='contact' id='connect'>
         <Container>
          <Row className='align-items-center'>
            <Col md={6}>
              <img src={image2} alt="no image" />
            </Col>
          <Col md={6}>
              <h2>Get In Touch</h2>
              <form  action="https://formspree.io/f/xnjjgddb" method="post"
                    className='input-forms' >
                  <Row>
                      <Col sm={6} className='px-1'>
                          <input type="text" placeholder='First Name' name='FirstName'  />
                      </Col>
                      <Col sm={6} className='px-1'>
                          <input type="text"  placeholder='Last Name' name='LastName'  />
                      </Col>
                      <Col sm={6} className='px-1'>
                          <input type="email"  placeholder='email' name='email' />
                      </Col>
                      <Col sm={6} className='px-1'>
                          <input type="tel"  placeholder='Phone No' name='PhoneNo' />
                      </Col>
                      <Col sm={6} className='px-1'>
                          <textarea name="message" cols="6" rows="6" placeholder='Message'></textarea>
                          <button type='submit'><span>Send</span></button>
                      </Col>
                  </Row>
              </form>
          </Col>
          </Row>
         </Container>
      </section>
      </>
    );
  }

  export default Contacts;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Subscribe = () => {
  return (
    <div className='py-5'>
        <Container> 
            <div className='subscribe__heading mb-5'>
                <h1>Subscribe</h1>
            </div>
            <div className='subscribe__body'>
                <div className='subscribe__body_wrapper'>
                    <div className="subscribe__text text-center">
                        <p>Sign up to hear from us about financial news.</p>
                    </div>
                    <div className="subscribe__form">
                        <Form>
                            <Form.Control type="email" className='subscribe__inp_text mb-3' placeholder="Email*" required />
                            <Button type="submit" className='subscribe__btn_submit p-2 mb-3' variant="light">Sign up</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Subscribe
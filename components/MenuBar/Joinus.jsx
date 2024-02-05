import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Joinus = () => {
  return (
    <div className='bg-black py-5'>
        <Container> 
            <div className='join__heading mb-5'>
                <h1>Join Our Waitlist!</h1>
            </div>
            <div className='join__body'>
                <div className='join__body_wrapper'>
                    <div className="join__text">
                        <p>Leave your name and email to be amont the first to use NordicPay when its ready!</p>
                    </div>
                    <div className="join__form">
                        <Form>
                            <Form.Control type="text" className='join__inp_text mb-3' placeholder="Name" required />
                            <Form.Control type="email" className='join__inp_text mb-3' placeholder="Email*" required />
                            <Button type="submit" className='join__btn_submit p-2 mb-3' variant="light">Join NordicPay</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Joinus
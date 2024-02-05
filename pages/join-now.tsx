import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import FooterEle from '../components/MenuBar/FooterEle'
import MenuBar from '../components/MenuBar/MenuBar'


const JoinNow = () => {
  return (
    <>
        <MenuBar />
        <div className='bg-black py-5 join__page'>
            <Container> 
                <div className='d-flex align-items-center justify-content-center join__page'>
                    <div>
                        <div className='join__heading mb0-5'>
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
                    </div>
                </div>
            </Container>
        </div>
        <FooterEle />
    </>
  )
}

export default JoinNow
import React from 'react'
import { Container } from 'react-bootstrap'

const FooterEle = () => {
  return (
    <div className='bg-black py-4'>
        <Container> 
            <div className='d-flex align-items-center justify-content-between flex-column flex-md-row'>
                <div className='footer__copyright'>
                    <p className='mb-0'>Copyright &copy; {new Date().getFullYear()} Nordic Pay - All Rights Reserved.</p>
                </div>
                <div className='footer__poweredby'>
                    <span>Powered by <a href="http://brdigitech.com">BRDigitech</a></span>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FooterEle
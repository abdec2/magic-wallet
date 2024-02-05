import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';


function MenuBar() {

  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg" className="px-4 py-3 bg-black">
      <Container fluid className='px-4'>
        <Navbar.Brand href="/">
            <img src='/images/logo.webp' alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <span className='no-underline menubar font-14 font-700 me-3'><Link href={'/'} >Home</Link></span>
            <span className='no-underline menubar font-14 font-400 ms-lg-3 me-lg-3 my-3 my-lg-0'><Link href={'/join-now'} >Join Now</Link></span>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;
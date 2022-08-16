import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const nav = () => {
    return ( 
        <>
          
    <Navbar collapseOnSelect expand="lg" className= {styles.navContainer} bg="white" variant="white" >
      <Container>
        <Navbar.Brand  href="#home"><img className='navbar-brand' src="/logo.png"  height='35px'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className={styles.menuList}>
            <Nav.Link className={`mt-2 ${styles.menu}`} href="/">Home</Nav.Link>
            <Nav.Link className={`mt-2 ${styles.menu}`} href="">Payments</Nav.Link>
          
            <Nav.Link className={`mt-2 ${styles.menu}`} href="">Bill Payment</Nav.Link>
            <Nav.Link className={`mt-2 ${styles.menu}`} href=''>Savings</Nav.Link>
            <Nav.Link className={`mt-2 ${styles.menu}`} href=''>Rewards</Nav.Link>
            <Nav.Link href=''><button className={styles.menuButton}>Get the app</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
          
        </>
    
    
    );
}
 
export default nav;
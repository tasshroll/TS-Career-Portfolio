import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';


export default function NavAnchors() {

const location = useLocation();
const currentPage = location.pathname;

  const styles = {

    navLink: {
      padding: 6,
      color: "black",
      fontSize: "1.2rem", 
      fontWeight: "500",
    },
    activeNavLink: {
      padding: 6,
      background: "##8ca190",
      color: "#fff",
      fontSize: "1.2rem", 
      fontWeight: "500",
    },
    li: {
      listStyle: 'none'
    },
    name: {
      fontSize: "2.0rem", 
      fontWeight: "500",
    },
  };

 

  return (
  
    <Navbar expand="lg" >
      <Container>
      <Navbar.Brand href="/">
          <span style={styles.name}>Tifni Shroll</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about" 
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
              style={currentPage === '/' ? styles.activeNavLink : styles.navLink}
            >About
            </Nav.Link>
            <Nav.Link href="/portfolio"
              className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
              style={currentPage === '/portfolio' ? styles.activeNavLink : styles.navLink}
            >Portfolio
            </Nav.Link>
            <Nav.Link href="/resume"
              className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
              style={currentPage === '/resume' ? styles.activeNavLink : styles.navLink}

            >Resume
            </Nav.Link>
            <Nav.Link href="/contact"
              className={currentPage === "/contact" ? 'nav-link active' : 'nav-link'}
              style={currentPage === '/contact' ? styles.activeNavLink : styles.navLink}
            >Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
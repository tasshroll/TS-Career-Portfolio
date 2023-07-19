import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavAnchors({ currentPage, handlePageChange }) {
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
      <Navbar.Brand href="#home">
          <span style={styles.name}>Tifni Shroll</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'About' ? styles.activeNavLink : styles.navLink}
            >About
            </Nav.Link>
            <Nav.Link href="#link"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Portfolio' ? styles.activeNavLink : styles.navLink}
            >Portfolio
            </Nav.Link>
            <Nav.Link href="#link"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Resume' ? styles.activeNavLink : styles.navLink}

            >Resume
            </Nav.Link>
            <Nav.Link href="#link"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Contact' ? styles.activeNavLink : styles.navLink}
            >Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default function Navbar({ currentPage, handlePageChange }) {
  const styles = {
    navLink: {
      margin: 20,
      padding: 6,
      background: "#black"
    },
    activeNavLink: {
      margin: 20,
      padding: 6,
      background: "##8ca190",
      color: "#fff"
    }
  };
  

  return (
    <div className="header-style">
      <nav>
        <ul>
          <li>
            <a
              href="#about-me"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'About' ? styles.activeNavLink : styles.navLink}
            >About Me
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Portfolio' ? styles.activeNavLink : styles.navLink}

            >Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Contact' ? styles.activeNavLink : styles.navLink}

            >Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              style={currentPage === 'Resume' ? styles.activeNavLink : styles.navLink}

            >Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
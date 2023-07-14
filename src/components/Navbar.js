
export default function Navbar({ currentPage, handlePageChange }) {

  return (
    <div className="header-style">
      <nav>
        <ul>
          <li>
            <a
              href="#about-me"
              onClick={() => handlePageChange = ('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >About Me
            </a>
          </li>

          <li>
            <a
              href="#work"
              onClick={() => handlePageChange = ('Work')}
              className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
            >Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => handlePageChange = ('Contact')}
              className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}
            >Contact
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage==='Resume' ? 'nav-link active' : 'nav-link'}
            >Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
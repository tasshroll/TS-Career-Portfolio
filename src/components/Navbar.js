import { useState } from "react"

export default function Navbar() {

  // useState to display skill on site
  const [showSkills, setShowSkills] = useState(false);
  const skills = ["React", "JavaScript", "HTML", "CSS"]

  // Function to download resume
  function downloadResume() {
    const resumeURL = "https://docs.google.com/document/d/1PQyY64zJtuLAxFP9K0l_yvupJwXLNUz9x3R-v2NWoxI/export?format=pdf"
    window.location.href = resumeURL;
  }

  function toggleSkills() {
    setShowSkills((prevShowSkills) => !prevShowSkills);
  }


  // When "Resume" is clicked, display page of skills and a link for user to download resume
  return (
    <div className="header-style">
      <nav>
        <ul>
          <li> <a href="#about-me">About Me</a></li>
          <li> <a href="#work">Portfolio</a></li>
          <li> <a href="#contact">Contact</a></li>
          <li>
            <a href="#resume" onClick={toggleSkills} >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      {showSkills && (
        <div>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      )}
    </div>
  );
}
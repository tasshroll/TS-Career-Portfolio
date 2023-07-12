import {useState } from "react"

export default function Navbar () {
return (
    <div className="header-style">
    <nav>
      <ul>
        <li> <a href="#about-me">About Me</a></li>
        <li> <a href="#work">Work</a></li>
        <li> <a href="#contact">Contact Me</a></li>
        <li> <a href="#resume">Resume</a></li>
      </ul>
    </nav>
  </div>
);
}
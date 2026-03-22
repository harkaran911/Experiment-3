import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Experiment 3</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#experiment31">Experiment 3.1</a></li>
        <li><a href="#experiment32">Experiment 3.2</a></li>
        <li><a href="#experiment33">Experiment 3.3</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
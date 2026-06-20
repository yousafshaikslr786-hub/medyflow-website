import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-area">
        <img src="/logo.png" alt="MedYFlow AI" />
        <span>MedYFlow AI</span>
      </div>

      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="demo-btn">
        Book Demo
      </a>

    </nav>
  );
}

export default Navbar;
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container nav">
        <img
          src="/assets/froid-logo-large.png"
          alt="Froid"
          className="logo"
        />

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="/">HOME</a>
          <a href="/#about">ABOUT</a>
          <a href="/solutions">SOLUTIONS</a>
          <a href="/customers">CUSTOMERS</a>
        </nav>

        <a className="btn btn-light desktop-btn" href="#contact">
          CONTACT US
        </a>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>HOME</a>
        <a href="/#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="/solutions" onClick={() => setMenuOpen(false)}>SOLUTIONS</a>
        <a href="/customers" onClick={() => setMenuOpen(false)}>CUSTOMERS</a>
        <a className="btn btn-light" href="#contact">
          CONTACT US
        </a>
      </div>
    </header>
  );
}

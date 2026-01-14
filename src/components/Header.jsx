export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <img src="/assets/froid-logo-large.png" alt="Froid" className="logo" />

        <nav className="nav-links">
          <a href="/">HOME</a>
          <a href="/#about">ABOUT</a>
          <a href="/solutions">SOLUTIONS</a>
          <a href="/customers">CUSTOMERS</a>
        </nav>

        <a className="btn btn-light" href="#contact">CONTACT US</a>
      </div>
    </header>
  );
}

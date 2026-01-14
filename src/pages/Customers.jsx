import { useEffect } from "react";

export default function Customers() {

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let current = 0;
      const speed = 100;

      const updateCounter = () => {
        const increment = target / speed;
        if (current < target) {
          current += increment;
          counter.innerText = Math.ceil(current);
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target;
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <div className="page">

      {/* ===== HEADER ===== */}
      <header className="topbar">
        <div className="container nav">
          <img src="/assets/froid-logo-large.png" alt="Froid logo" className="logo" />
          <nav className="nav-links">
            <a href="/">HOME</a>
            <a href="/#about">ABOUT</a>
            <a href="/solutions">SOLUTIONS</a>
            <a href="/customers" className="active">CUSTOMERS</a>
          </nav>
          <a className="btn btn-light" href="/#contact">CONTACT US</a>
        </div>
      </header>

      <main>

        {/* ===== HERO ===== */}
        <section className="customers-hero">
          <div className="container customers-hero-content">
            <h1 className="customers-hero-title">
              trusted by businesses<br />around the world
            </h1>

            <div className="customers-hero-map">
              <img
                src="/assets/map-against-white-background 1.png"
                alt="World Map"
                className="world-map-image"
              />

              <div className="map-pin pin-1" data-location="KERALA"></div>
              <div className="map-pin pin-2" data-location="Saudi Arabia"></div>
              <div className="map-pin pin-3" data-location="Nepal"></div>
              <div className="map-pin pin-4" data-location="Singapore"></div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="stats">
          <div className="container stats-grid">
            <div className="stat">
              <div className="stat-value counter" data-target="5">0</div>
              <div className="stat-label">clients</div>
            </div>
            <div className="stat">
              <div className="stat-value counter" data-target="80">0</div>
              <div className="stat-label">no of machines</div>
            </div>
            <div className="stat">
              <div className="stat-value counter" data-target="1000">0</div>
              <div className="stat-label">users</div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta">
          <div className="container cta-row">
            <div className="cta-text">
              Ready to transform the way your operations perform?
            </div>
            <a className="btn btn-primary" href="/demo">SCHEDULE A DEMO</a>
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer id="contact" className="footer">
        <div className="container footer-grid">

          <div className="footer-col">
            <div className="footer-logo-wrapper">
              <div className="footer-logo-icon"></div>
              <span className="footer-logo-text">TeraObjects</span>
            </div>
            <p className="footer-address">
              Nilampathinjamugal Rajagiri Valley Rd, Kakkanad, Kerala 682039
            </p>
            <div className="footer-contact">
              <p><strong>Contact Sales</strong> sales@teraobjects.com</p>
              <p><strong>Phone</strong> (+91) 9656 589 034</p>
            </div>
          </div>

          <div className="footer-col">
            <p className="footer-address">
              57 Genting Lane, #04-00 Gani Building, Singapore 349564
            </p>
            <div className="footer-contact">
              <p><strong>Email</strong> sales@oredicksolutions.com.sg</p>
              <p><strong>Phone</strong> (+65) 9016 5538</p>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-list">
              <li>Facility Maintenance</li>
              <li>Field Service</li>
            </ul>

            <div className="social-row">
              <a href="https://www.linkedin.com/company/teraobjects" target="_blank" rel="noreferrer">
                <img src="/assets/linkedin-icon.png" />
              </a>
              <a href="https://www.instagram.com/TerarobotsIndia" target="_blank" rel="noreferrer">
                <img src="/assets/social-icon.png" />
              </a>
              <a href="https://www.youtube.com/@TerarobotsIndia" target="_blank" rel="noreferrer">
                <img src="/assets/youtube-icon.png" />
              </a>
            </div>
          </div>

          <div className="footer-col footer-col-badges">
            <div className="footer-badges">
              <img src="/assets/app-store.png" />
              <img src="/assets/google-play.png" />
            </div>

            <div className="footer-illustration">
              <img src="/assets/contact-image.png" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

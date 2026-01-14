export default function Demo() {
  return (
    <div>

      {/* ===== NAVBAR ===== */}
      <header className="froid-header">
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/assets/froid-logo.png" alt="Froid" />
          </a>

          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/solutions">Solutions</a>
            <a href="/customers">Customers</a>
          </nav>

          <a href="/#contact" className="btn-contact">Contact Us</a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="demo-hero">
        <h1>Request a Demo</h1>
        <p>See how Froid can transform your business.</p>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="demo-content">
        <div className="demo-grid">

          <div>
            <h2>What to Expect</h2>
            <p>Personalized demo, live Q&A, and no commitment.</p>
          </div>

          {/* ===== FORM ===== */}
          <form
            className="demo-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input type="hidden" name="access_key" value="002ab0c6-8577-43f7-b66f-cf354cb8d35e" />
            <input type="hidden" name="subject" value="New Demo Request - Froid" />
            <input type="hidden" name="from_name" value="Froid Website" />
            <input type="hidden" name="redirect" value="/thankyou.html" />

            <div className="form-group">
              <input type="text" name="First Name" placeholder="First Name" required />
            </div>

            <div className="form-group">
              <input type="text" name="Last Name" placeholder="Last Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="Email" placeholder="Work Email" required />
            </div>

            <div className="form-group">
              <input type="text" name="Company" placeholder="Company Name" required />
            </div>

            <div className="form-group">
              <input type="tel" name="Phone" placeholder="Phone Number" />
            </div>

            <div className="form-group">
              <input type="text" name="Job Title" placeholder="Job Title" />
            </div>

            <div className="form-group">
              <select name="Company Size">
                <option value="">Company Size</option>
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>201–500</option>
                <option>500+</option>
              </select>
            </div>

            <div className="form-group">
              <textarea name="Requirements" placeholder="Tell us about your needs"></textarea>
            </div>

            <button type="submit" className="form-submit">Request Demo</button>

          </form>

        </div>
      </section>

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

export default function Footer() {
  return (
    <>
            <section className="cta">
          <div className="container cta-row">
            <div className="cta-text">
              Ready to transform the way your operations perform?
            </div>
            <a className="btn btn-primary" href="/demo">SCHEDULE A DEMO</a>
          </div>
        </section>

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
    </>
  );
}

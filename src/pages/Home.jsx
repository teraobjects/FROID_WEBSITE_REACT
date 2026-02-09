import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function Home() {

  /* ================= PAGE LOAD ANIMATION ================= */
  useEffect(() => {
    document.body.classList.add("page-loaded");

    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []);

  /* ================= COUNTER ANIMATION ================= */
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
    <>
      <Header />

      <div className="page">

        {/* ================= HERO ================= */}
        <section id="home" className="hero">
          <div className="hero-bg" />

          <div className="container hero-wrapper">
            <div className="hero-content">
              <h1>
                one-stop app for <br />
                <span className="highlight">hassle-free service</span>
              </h1>
            </div>
          </div>

          <div className="hero-icons-container">
            {/* Center Woman */}
            <div className="hero-woman">
              <img
                src="assets/women_landing_page.png"
                alt="Woman using phone"
              />
            </div>

            {/* Floating Icons */}
            <div className="hero-float-icons">
              {/* LEFT */}
              <img src="assets/setting.png" className="float-icon left one" alt="" />
              <img src="assets/Group 11.png" className="float-icon left two" alt="" />
              <img src="assets/Group 9.png" className="float-icon left three" alt="" />

              {/* RIGHT */}
              <img src="assets/shake.png" className="float-icon right one" alt="" />
              <img src="assets/refresh.png" className="float-icon right two" alt="" />
              <img src="assets/setting.png" className="float-icon right three" alt="" />
            </div>

            {/* Connecting Lines */}
            <svg
              className="icon-connections"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              <line x1="8%" y1="15%" x2="12%" y2="28%" stroke="white" strokeWidth="2" opacity="0.4" />
              <line x1="12%" y1="28%" x2="10%" y2="50%" stroke="white" strokeWidth="2" opacity="0.4" />
              <line x1="88%" y1="18%" x2="90%" y2="35%" stroke="white" strokeWidth="2" opacity="0.4" />
              <line x1="90%" y1="35%" x2="86%" y2="55%" stroke="white" strokeWidth="2" opacity="0.4" />
            </svg>
          </div>
        </section>

        {/* ================= STATS ================= */}
        <section className="stats">
          <div className="container stats-grid">
            <div className="stat">
              <div className="stat-value counter" data-target="7">0</div>
              <div className="stat-label">clients</div>
            </div>

            <div className="stat">
              <div className="stat-value counter" data-target="2772">0</div>
              <div className="stat-label">no of machines</div>
            </div>

            <div className="stat">
              <div className="stat-value counter" data-target="151">0</div>
              <div className="stat-label">users</div>
            </div>
          </div>
        </section>

        {/* ================= KEY BENEFITS ================= */}
        <section id="solutions" className="section">
          <div className="container">
            <h2 className="section-title">key benefits</h2>

            <div className="benefits-icons">
              <div className="benefit">
                <img src="assets/rocket-icon.png" alt="AI Driven" />
                <p>ai driven</p>
                <small>smart solutions. simple results.</small>
              </div>

              <div className="benefit">
                <img src="assets/group 1.png" alt="UX" />
                <p>seamless user experience</p>
                <small>fast and seamless.</small>
              </div>

              <div className="benefit">
                <img src="assets/resize-icon.png" alt="Efficiency" />
                <p>operational efficiency</p>
                <small>we handle it all.</small>
              </div>

              <div className="benefit">
                <img src="assets/security-icon.png" alt="Security" />
                <p>streamline processes</p>
                <small>feature-rich & budget-friendly.</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SOLUTION ================= */}
        <section className="section light">
          <div className="container solution">
            <h2 className="section-title">our solution</h2>
            <p className="section-subtitle">
              innovative solution tailored to elevate your business
            </p>

            <div className="solution-content">
              <img src="assets/service-image.png" alt="Service" className="solution-img" />
              <a href="/solutions" className="btn btn-light solution-btn">
                SOLUTIONS
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div>
              <h2 className="section-title">about us</h2>
              <ul className="about-list">
                <li>technology-driven solutions for manufacturing</li>
                <li>ai powered next-gen field service apps</li>
                <li>enhancing operational efficiency digitally</li>
              </ul>
            </div>

            <div className="about-img-wra">
              <img src="assets/contact-image.png" alt="Team" className="about-img" />
            </div>
          </div>
        </section>

      </div>

      <CTA />
      <Footer />
    </>
  );
}

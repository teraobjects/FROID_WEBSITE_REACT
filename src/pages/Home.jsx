import { useEffect } from "react";
import Header from "../components/Header";      
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function Home() {

  // Counter animation (converted from your script)
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
    <section id="home" className="hero">
        <div className="hero-bg" />

        <div className="container hero-wrapper">
        <div className="hero-content">
            <h1>
            one-stop app for <br />
            <span className="highlight">hassle-free service</span>
            </h1>
            {/* <p className="subtitle">ai enabled service solution</p> */}
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
            {/* LEFT SIDE */}
            <img src="assets/setting.png" className="float-icon left one" alt="" />
            <img src="assets/Group 11.png" className="float-icon left two" alt="" />
            <img src="assets/Group 9.png" className="float-icon left three" alt="" />

            {/* RIGHT SIDE */}
            <img src="assets/shake.png" className="float-icon right one" alt="" />
            <img src="assets/refresh.png" className="float-icon right two" alt="" />
            <img src="assets/setting.png" className="float-icon right three" alt="" />
        </div>

        {/* Connecting lines */}
        <svg
            className="icon-connections"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
        >
            <line
            x1="8%"
            y1="15%"
            x2="12%"
            y2="28%"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
            />
            <line
            x1="12%"
            y1="28%"
            x2="10%"
            y2="50%"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
            />
            <line
            x1="88%"
            y1="18%"
            x2="90%"
            y2="35%"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
            />
            <line
            x1="90%"
            y1="35%"
            x2="86%"
            y2="55%"
            stroke="white"
            strokeWidth="2"
            opacity="0.4"
            />
        </svg>
        </div>
    </section>

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
            <img src="assets/group 1.png" alt="Seamless UX" />
            <p>seamless User experience</p>
            <small>fast and seamless.</small>
            </div>

            <div className="benefit">
            <img src="assets/resize-icon.png" alt="Efficiency" />
            <p>operational efficiency</p>
            <small>we handle it all.</small>
            </div>

            <div className="benefit">
            <img src="assets/security-icon.png" alt="Processes" />
            <p>streamline business processes</p>
            <small>feature-rich and budget-friendly.</small>
            </div>
        </div>
        </div>
    </section>

    <section className="section light">
        <div className="container solution">
        <h2 className="section-title">our solution</h2>
        <p className="section-subtitle">
            innovative solution tailored to elevate your business in the digital era
        </p>

        <div className="solution-content">
            <img
            src="assets/service-image.png"
            alt="Service"
            className="solution-img"
            />
            <a href="/solutions" className="btn btn-light solution-btn">
            SOLUTIONS
            </a>
        </div>
        </div>
    </section>

    <section id="about" className="section">
        <div className="container why">
        <div className="why-title-block">
            <h2 className="section-title">
            why choose <br /> teraObjects
            </h2>
        </div>

        <div className="why-grid">
            <div className="why-card">
            <img src="assets/rocket-icon.png" alt="Innovation" />
            <p>innovation driven</p>
            </div>

            <div className="why-card">
            <img src="assets/resize-icon.png" alt="Scalable" />
            <p>scalable solutions</p>
            </div>

            <div className="why-card">
            <img src="assets/security-icon.png" alt="Secure" />
            <p>secure infrastructure</p>
            </div>

            <div className="why-card">
            <img src="assets/24-7 (1).png" alt="Support" />
            <p>24/7 support</p>
            </div>
        </div>
        </div>
    </section>

    <section className="section about">
        <div className="container about-grid">
        <div>
            <h2 className="section-title">about us</h2>
            <ul className="about-list">
            <li>
                we are technology-driven specializing in innovative solutions
                targeting the manufacturing industry.
            </li>
            <li>
                we have developed ai driven next gen apps for field service and
                plant maintenance.
            </li>
            <li>
                our goal is to streamline business processes and digital enablement
                of people to enhance operational efficiency.
            </li>
            </ul>
        </div>

        <div className="about-img-wrap">
            <img
            src="assets/contact-image.png"
            alt="Team"
            className="about-img"
            />
        </div>
        </div>
    </section> 
    </div>
    <CTA />
    <Footer />
    </>
  );
}

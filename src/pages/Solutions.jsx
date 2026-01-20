import { useEffect } from "react";
import Header from "../components/Header";      
import Footer from "../components/Footer";
import CTA from "../components/CTA";

export default function Solutions() {

  // (No JS logic needed here yet)
  useEffect(() => {
    // Reserved for future animations if needed
  }, []);

  return (
    <>
      <Header />
    <div className="page">
   {/* ================= HERO ================= */}
<section className="solutions-hero">
  
  {/* FULL WIDTH IMAGE */}
  <div className="solutions-hero-image">
    <img src="/assets/solutions cover .jpg" alt="AC Technician" />
  </div>

  {/* CONTENT OVERLAY */}
  <div className="solutions-hero-content-wrapper">
    <div className="solutions-hero-content container">

      <div className="solutions-hero-logo">
        <img
          src="/assets/froid-logo.png"
          className="froid-logo"
          alt="Froid"
        />
        <span className="snowflake">❄</span>
      </div>

      <p className="solutions-hero-tagline">
        AI Enabled Smart AC Care
      </p>

      <ul className="solutions-hero-list">
        <li>1000s of tons of air conditioning across many customers</li>
        <li>
          Run your entire service organization from <b>One App</b>
        </li>
      </ul>

      <a
        href="https://youtu.be/9ZVLgxYIzEg?si=KI7Wr4nXBjOsVUHM"
        target="_blank"
        rel="noopener noreferrer"
        className="solutions-hero-cta"
      >
        <span className="play-icon">▶</span> VIDEO BROCHURE
      </a>

    </div>
  </div>
</section>


      {/* ================= CHALLENGES ================= */}
      <section className="solutions-section light-bg">
        <div className="container">

          <div className="solutions-challenges-header">
            <div className="solutions-challenges-title-wrapper">
              <h2 className="solutions-title">
                Challenges Of{" "}
                <span className="solutions-title-underline">
                  Maintenance Department
                </span>
              </h2>
            </div>

            <img
              src="/assets/challenges.png"
              alt="Stressed technician"
              className="solutions-challenges-header-image"
            />
          </div>

          <div className="solutions-challenges-row">
  <div className="solutions-challenge">
    <img src="/assets/breakdown2.png" alt="" />
    <span className="highlight-text">Machine Breakdowns</span>
  </div>

  <div className="solutions-challenge">
    <img src="/assets/records.png" alt="" />
    <span className="highlight-text">Consistent records</span>
  </div>

  <div className="solutions-challenge">
    <img src="/assets/machinecalibration.png" alt="" />
    <span className="highlight-text">Machine Calibration</span>
  </div>

  <div className="solutions-challenge">
    <img src="/assets/setting1.png" alt="" />
    <span className="highlight-text">Spare Parts Management</span>
  </div>
</div>


          <div className="solutions-note-wrapper">
            <p className="solutions-note">
              These challenges cannot be effectively solved using{" "}
              <span className="note-highlight">WhatsApp groups</span>,{" "}
              <span className="note-highlight">Google Sheets</span>, or{" "}
              <span className="note-highlight">paper reports</span>.
            </p>

            <div className="solutions-note-image-wrapper">
              <img
                src="/assets/man holding paper.png"
                alt="Technician with papers"
                className="solutions-note-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="solutions-intro">
        <div className="container solutions-intro-inner">
          <img
            src="/assets/intro froid.png"
            alt="Engineer with tablet"
            className="solutions-intro-photo"
          />

          <img
            src="/assets/froid-logo.png"
            alt="Froid"
            className="solutions-intro-logo"
          />

          <div className="solutions-intro-text">
            <h2>
              Introducing The Next Generation <br />
              Field Service App
            </h2>
          </div>
        </div>
      </section>

      {/* ================= NEXT GEN FEATURES ================= */}
      <section className="solutions-section">
        <div className="container solutions-nextgen">
          <div className="solutions-nextgen-card">
            <img
              src="/assets/Group 8.png"
              className="solutions-nextgen-phone phone-float"
              alt="App UI"
            />

            <div className="solutions-nextgen-content">
              <h3>NEXT GEN FEATURES</h3>
              <ul>
                <li>Highly Customizable CMMS</li>
                <li>Detailed Service Tickets Reports</li>
                <li>Scan QR Codes to Create Tickets</li>
                <li>Auto Ticket Creation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICE TICKET MANAGEMENT ================= */}
      <section className="solutions-section blue-bg solutions-tickets-section">
        <div className="container solutions-tickets">
          <h3 className="solutions-tickets-title">SERVICE TICKET MANAGEMENT</h3>
          <p className="solutions-tickets-sub">Different type of Tickets</p>
          <div className="solutions-tickets-main">
            <div className="solutions-tickets-phone-wrapper">
              <div className="solutions-tickets-phone-container">
                <img
                  src="/assets/mob scrn.png"
                  alt="Service tickets app"
                  className="solutions-tickets-phone"
                />
                <div className="solutions-tickets-tags">
                  <span className="ticket-tag tag-top-left">Calibration</span>
                  <span className="ticket-tag tag-top-right">Inspections</span>
                  <span className="ticket-tag tag-bottom-left">Equipment Support</span>
                  <span className="ticket-tag tag-middle-right">Spares Usage Tracking</span>
                  <span className="ticket-tag tag-bottom-left-overlap">Alert & Notifications</span>
                  <span className="ticket-tag tag-bottom-right-overlap">Preventive Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STANDARD FEATURES ================= */}
      <section className="solutions-section">
        <div className="container solutions-standard">
          <div className="solutions-standard-header">
            <img
              src="/assets/froid-logo-large.png"
              alt="Froid logo"
              className="solutions-standard-logo"
            />
          </div>
          <div className="solutions-standard-content">
            <div className="solutions-standard-phones">
              <img src="/assets/face ui.png" className="phone-back" alt="Phone back" />
              <img src="/assets/side_view.png" className="phone-front" alt="Phone front" />
            </div>
            <div className="solutions-standard-list">
              <h3>Standard Features</h3>
              <ul>
                <li>Work orders</li>
                <li>Service Hours</li>
                <li>Increase machine Uptime</li>
                <li>Service And Spares Quotes</li>
                <li>Up to date customer information</li>
                <li>Boost equipment dependability</li>
                <li>Signature capture</li>
                <li>User friendly & responsive interface</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEAMLESS EXPERIENCE ================= */}
      <section className="solutions-section">
        <div className="container solutions-seamless">
          <div className="solutions-seamless-card">
            <p>Seamless Experience in</p>

            <div className="solutions-seamless-icons">
              <div className="seamless-icon-item">
                <img src="/assets/web.png" alt="Web" />
                <span>Web</span>
              </div>

              <div className="seamless-icon-item">
                <img src="/assets/apple-logo.png" alt="iOS" />
                <span>iOS</span>
              </div>

              <div className="seamless-icon-item">
                <img src="/assets/android.png" alt="Android" />
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <CTA />
    <Footer />
    </>
  );
}

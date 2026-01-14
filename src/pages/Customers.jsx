import { useEffect } from "react";
import Header from "../components/Header";      
import Footer from "../components/Footer";

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
      <Header />

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

              <div className="map-pin pin-1" data-location="India"></div>
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

      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import Header from "../components/Header";      
import Footer from "../components/Footer";

export default function Demo() {

  useEffect(() => {
    // No JS logic required for now
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Header />

      {/* ================= HERO ================= */}
      <section className="demo-hero">
        <h1>Request a Demo</h1>
        <p>See how Froid can transform your business.</p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="demo-content">
        <div className="demo-grid">

          <div>
            <h2>What to Expect</h2>
            <p>Personalized demo, live Q&A, and no commitment.</p>
          </div>

          {/* ================= FORM ================= */}
          <form
            className="demo-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="002ab0c6-8577-43f7-b66f-cf354cb8d35e"
            />
            <input
              type="hidden"
              name="subject"
              value="New Demo Request - Froid"
            />
            <input
              type="hidden"
              name="from_name"
              value="Froid Website"
            />
            <input
              type="hidden"
              name="redirect"
              value="thankyou.html"
            />

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
              <textarea
                name="Requirements"
                placeholder="Tell us about your needs"
              />
            </div>

            <button type="submit" className="form-submit">
              Request Demo
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

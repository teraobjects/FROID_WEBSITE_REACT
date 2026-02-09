import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Demo() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <Header />

      {/* ================= MAIN (OFFSET FOR FIXED HEADER) ================= */}
      <main className="page-wrapper">

        {/* ================= HERO ================= */}
        <section className="demo-hero">
          <h1>Request a Demo</h1>
          <p>
            see how our platform can transform your business.
            schedule a personalized demo with our team and
            discover the features that matter most to you.
          </p>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="demo-content">
          <div className="container">
            <div className="demo-grid">

              {/* LEFT SIDE */}
              <div className="demo-expectations">
                <h2>what to expect</h2>

                <div className="expectation-item">
                  <span className="check">✓</span>
                  <div>
                    <h4>personalized walkthrough</h4>
                    <p>
                      a customized demo tailored to your specific
                      business needs and use cases.
                    </p>
                  </div>
                </div>

                <div className="expectation-item">
                  <span className="check">✓</span>
                  <div>
                    <h4>live Q&A session</h4>
                    <p>
                      Ask questions and get real-time answers
                      from our product experts.
                    </p>
                  </div>
                </div>

                <div className="expectation-item">
                  <span className="check">✓</span>
                  <div>
                    <h4>implementation Guidance</h4>
                    <p>
                      learn best practices and how to get started quickly.
                    </p>
                  </div>
                </div>

                <div className="expectation-item">
                  <span className="check">✓</span>
                  <div>
                    <h4>no commitment required</h4>
                    <p>
                      explore the platform with no pressure or obligations.
                    </p>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                className="demo-form"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input type="hidden" name="access_key" value="002ab0c6-8577-43f7-b66f-cf354cb8d35e" />
                <input type="hidden" name="subject" value="New Demo Request - Froid" />

                <div className="form-row">
                  <input type="text" name="First Name" placeholder="Name *" required />
                  <input type="text" name="Last Name" placeholder="Last Name *" required />
                </div>

                <input type="email" name="Email" placeholder="Work Email *" required />
                <input type="text" name="Company" placeholder="Company Name " />
                <input type="tel" name="Phone" placeholder="Phone Number *" required/>
                {/* <input type="text" name="Job Title" placeholder="Job Title" /> */}

                {/* <select name="Company Size">
                  <option value="">Select company size</option>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>201–500</option>
                  <option>500+</option>
                </select> */}

                <textarea
                  name="Message"
                  placeholder="Tell us about your needs"
                />

                <button type="submit" className="form-submit">
                  Request Demo
                </button>
              </form>

            </div>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

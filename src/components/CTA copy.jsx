export default function CTA({
  heading = "Ready to transform the way your operations perform?",
  buttonText = "SCHEDULE A DEMO",
  buttonLink = "/demo",
}) {
  return (
    <section className="cta-section">
      <div className="cta-inner container">
        <h3>{heading}</h3>
        <a href={buttonLink} className="cta-btn">{buttonText}</a>
      </div>
    </section>
  );
}

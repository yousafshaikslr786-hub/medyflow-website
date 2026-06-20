import "../styles/CTA.css";

function CTA() {
  return (
    <section
      className="cta"
      data-aos="zoom-in"
    >

      <h2>Ready to Recover Lost Revenue?</h2>

      <p>
        Book a personalized Hospital Assessment with MedYFlow AI.
        Discover hidden revenue opportunities, evaluate your follow-up workflow,
        and see how AI can improve patient recovery.
      </p>

      <a href="#contact" className="primary-btn">
         Book Executive Assessment
      </a>

      <p className="cta-note">
        <strong>₹1,999 Executive Assessment</strong><br />
        100% adjusted against your Pilot or First Subscription.
      </p>

    </section >
  );
}

export default CTA;
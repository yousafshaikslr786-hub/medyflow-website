import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-left"
        data-aos="fade-right"
      >

        <span className="badge">
          AI-Powered Healthcare Recovery Intelligence
        </span>

        <h1>
          Recover Revenue.
          <br />
          Improve Patient Care.
          <br />
          Powered by AI.
        </h1>

        <p>
          MedYFlow AI helps hospitals recover missed follow-ups,
          reduce revenue leakage, and improve patient outcomes
          using intelligent AI automation.
        </p>

        <div className="hero-buttons">

          <a href="#contact" className="primary-btn">
              Book Executive Assessment
          </a>

          <a href="#dashboard" className="secondary-btn">
               View Dashboard
          </a>
        </div>

        

    

      </div>

      <div
        className="hero-right"
        data-aos="fade-left"
      >

        <img
          src="/hero-dashboard.png"
          alt="MedYFlow Dashboard"
        />

      </div>

    </section>
  );
}

export default Hero;
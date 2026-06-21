import "../styles/Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
    >

      <div className="footer-top">

        <div>

          <h2>MedYFlow AI</h2>

          <p>
            AI-powered patient recovery platform helping hospitals
            recover revenue, improve follow-ups and deliver better care.
          </p>

          {/* Founder */}
          <div className="founder-info">
            <span>Founded by</span>
            <h4>Yousaf Shaik</h4>
            <p>Founder & Chief Executive Officer, MedYFlow AI</p>
          </div>

        </div>

        <div>

          <h3>Product</h3>

          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#how">How It Works</a>

        </div>

        <div>

          <h3>Company</h3>

          <a href="#">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Privacy Policy</a>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 MedYFlow AI. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;
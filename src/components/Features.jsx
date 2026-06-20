import "../styles/Features.css";

function Features() {
  const features = [
    {
      title: "AI Recovery Intelligence",
      text: "Predict patients at risk of missing follow-ups before revenue is lost.",
      image: "/ai-engine.png",
    },
    {
      title: "Patient Management",
      text: "Manage appointments, follow-ups and patient records from one dashboard.",
      image: "/patient-management.png",
    },
    {
      title: "Recovery Analytics",
      text: "Track recovered revenue, recovery rates and hospital performance in real time.",
      image: "/analytics.png",
    },
    {
      title: "Bulk Patient Upload",
      text: "Upload thousands of patient records securely in seconds using Excel or CSV.",
      image: "/upload.png",
    }
  ];

  return (
    <section
       className="features"
       id="features"
       data-aos="fade-up"
    >
      <div className="section-title">
        <span>FEATURES</span>
        <h2>Everything Your Hospital Needs</h2>
        <p>
          MedYFlow AI combines intelligent automation, analytics and patient
          recovery into one unified platform.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div 
            className="feature-card" 
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
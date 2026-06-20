import "../styles/HowItWorks.css";

import {
  FaFolderOpen,
  FaRobot,
  FaComments,
  FaChartBar,
} from "react-icons/fa";


function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Patients",
      text: "Upload patient data securely using Excel or CSV in just a few clicks.",
      icon: <FaFolderOpen />,
    },
    {
      number: "02",
      title: "AI Analysis",
      text: "MedYFlow AI identifies patients likely to miss follow-ups and predicts recovery risks.",
      icon: <FaRobot />,
    },
    {
      number: "03",
      title: "Smart Follow-ups",
      text: "Automatic reminders and AI recommendations help patients return on time.",
      icon: <FaComments />,
    },
    {
      number: "04",
      title: "Recovery Dashboard",
      text: "Track recovered revenue, patient outcomes and hospital performance in real time.",
      icon: <FaChartBar />,
    },
  ];

  return (
    <section className="how-section" id="how">

      <div className="section-title">
        <span>HOW IT WORKS</span>

        <h2>
          From Patient Data
          <br />
          To Revenue Recovery
        </h2>

        <p>
          MedYFlow AI automates the complete patient follow-up process
          from upload to recovery tracking.
        </p>
      </div>

      <div className="steps">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;
import "../styles/Stats.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Stats() {

    const { ref, inView } = useInView({
      triggerOnce: true,
    });


  return (
    <section
       className="stats"
       data-aos="fade-up"
    >

      <div className="stat-card">
        <h2>
          {inView && <CountUp end={95} duration={2} />}%
        </h2>
        <p>Follow-up Success Rate</p>
      </div>

      <div className="stat-card">
        <h2>
            ₹{inView && <CountUp end={2.8} decimals={1} duration={2} />}Cr+
        </h2>
        <p>Revenue Recovery</p>
      </div>

      <div className="stat-card">
        <h2>
            {inView && <CountUp end={12} duration={2} />}K+
        </h2>
        <p>Patients Managed</p>
      </div>

      <div className="stat-card">
        <h2>24×7</h2>
        <p>AI Monitoring</p>
      </div>

    </section>
  );
}

export default Stats;
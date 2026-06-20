import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <section
      className="dashboard-section"
      id="dashboard"
      data-aos="fade-up"
    >

      <div className="dashboard-content">

        <div className="dashboard-left">

          <span className="dashboard-tag">
            LIVE HOSPITAL DASHBOARD
          </span>

          <h2>
            Everything Your Hospital Needs.
            <br />
            One Intelligent Dashboard.
          </h2>

          <p>
            Monitor patient recovery, track missed follow-ups,
            identify revenue leakage and make smarter decisions
            using real-time AI insights.
          </p>

          <div className="dashboard-list">

            <div>✅ Live Recovery Analytics</div>
            <div>✅ Revenue Tracking</div>
            <div>✅ AI Patient Risk Detection</div>
            <div>✅ Doctor Performance Insights</div>
            <div>✅ Smart Follow-up Automation</div>
            <div>✅ Executive Reports</div>

          </div>

        </div>

        <div className="dashboard-right">

          <img
            src="/hero-dashboard.png"
            alt="MedYFlow Dashboard"
          />

        </div>

      </div>

    </section>
  );
}

export default Dashboard;
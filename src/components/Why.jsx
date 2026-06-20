import "../styles/Why.css";

function Why() {
  const items = [
    {
      number: "01",
      title: "Recover Lost Revenue",
      text: "Automatically identify patients who missed follow-ups before revenue is lost."
    },
    {
      number: "02",
      title: "Improve Patient Outcomes",
      text: "AI prioritizes high-risk patients so hospitals can intervene earlier."
    },
    {
      number: "03",
      title: "Save Staff Time",
      text: "Reduce manual follow-up work with intelligent automation."
    }
  ];

  return (
    <section className="why">

      <span>WHY MEDYFLOW AI</span>

      <h2>
        Built For Modern Hospitals
      </h2>

      <div className="why-grid">

        {items.map((item,index)=>(

          <div className="why-card" key={index}>

            <h1>{item.number}</h1>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Why;
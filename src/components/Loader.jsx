import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader">
      <img src="/logo.png" alt="MedYFlow AI" />
      <h2>MedYFlow AI</h2>
      <div className="spinner"></div>
    </div>
  );
}

export default Loader;
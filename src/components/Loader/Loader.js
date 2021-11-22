import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  );
}

export default Loader;

import "./loader.css";

const Loader = () => {
  return (
    <div className="loader_wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;

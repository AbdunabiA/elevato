import './button.scss'

const Button = ({ text, icon, color, disabled, onClick, type, className, bref }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={"button " + className}
      style={
        disabled
          ? { backgroundColor: "#B9B9B9", cursor: "not-allowed" }
          : color
          ? { backgroundColor: color }
          : { backgroundColor: "#F9C70B" }
      }
      ref={bref}
    >
      {text}
      {icon ? <img src={icon} alt="icon"/> : null}
    </button>
  );
};

export default Button
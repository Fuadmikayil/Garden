import "../styles/greenCircle.scss";

function GreenCircle({ className }) {
  return <div className={`green-circle ${className || ""}`}></div>;
}

export default GreenCircle;

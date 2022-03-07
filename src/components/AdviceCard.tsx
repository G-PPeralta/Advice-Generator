import useFetch from "../hooks/useFetch";
import pathDivider from "../images/pattern-divider-desktop.svg";
import diceImage from "../images/icon-dice.svg"

const AdviceCard = () => {
  const { advice } = useFetch("https://api.adviceslip.com/advice");

  return (
    <div className="card-container">
      <h5 className="advice-number">ADVICE #{advice.id}</h5>
      {advice && <h2 className="advice">{advice.advice}</h2>}
      <img src={ pathDivider } alt="patter-divider" />
      <br />
      <button className="dice-btn" onClick={() => window.location.reload()}>
        <img src={ diceImage } alt="dice icon" />
      </button>
    </div>
  );
};

export default AdviceCard;

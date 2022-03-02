import useFetch from "../hooks/useFetch";

const AdviceCard = () => {
  const { advice } = useFetch("https://api.adviceslip.com/advice");

  return (
    <div className="card-container">
      <h5 className="advice-number">ADVICE #{advice.id}</h5>
      {advice && <h2 className="advice">{advice.advice}</h2>}
      <img src="../images/pattern-divider-desktop.svg" alt="patter-divider" />
      <br />
      <button className="dice-btn" onClick={() => window.location.reload()}>
        <img src="../images/icon-dice.svg" alt="dice icon" />
      </button>
    </div>
  );
};

export default AdviceCard;

import PokemonContainer from "./PokemonContainer";
import "../styles/EndScreen.css";
import PropTypes from "prop-types";

export default function EndScreen({ history, hScore, progressGame, total }) {
  return (
    <div className="flex" id="main">
      <h1>{total === history.length - 1 ? "You Win!" : "Oops!"}</h1>
      <div id="scores">
        <h1 id="end-score">
          Score: {history.length - 1} / {total}
        </h1>
        <h1 id="hscore">High Score: {hScore}</h1>
        {history.length - 1 === hScore && <span id="new">New High Score!</span>}
      </div>

      <button onClick={progressGame}>Back to Start</button>
      <h2 id="container-title">Picked Pokémon:</h2>
      <PokemonContainer pokemon={history} />
    </div>
  );
}

EndScreen.propTypes = {
  history: PropTypes.arrayOf(PropTypes.number),
  hScore: PropTypes.number,
  progressGame: PropTypes.func,
  total: PropTypes.number,
};

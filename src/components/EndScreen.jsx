import PokemonContainer from "./PokemonContainer";
import "../styles/EndScreen.css";
import PropTypes from "prop-types";

export default function EndScreen({
  history,
  hScore,
  progressGame,
  total,
  everHScore,
}) {
  const message =
    total === history.length - 1
      ? "You Win!"
      : total * 0.75 < history.length
        ? "So close!"
        : total * 0.5 < history.length
          ? "Unlucky!"
          : "Oops!";

  return (
    <div className="flex" id="main">
      <h1>{message}</h1>
      <div id="scoreContainer">
        <div id="scores">
          <h1 id="end-score">
            <b>Score: </b>
            {history.length - 1} / {total}
          </h1>
          <h1 id="hscore">
            <b>High Score: </b>
            {hScore}
          </h1>
          <h1 id="everScore">
            <b>Highest Ever Score: </b>
            {everHScore.current}
          </h1>
        </div>
        <div id="new">
          {history.length - 1 === hScore && <span>New High Score!</span>}
          {history.length - 1 === everHScore.current && (
            <span>New Highest Ever!</span>
          )}
        </div>
      </div>

      <button onClick={progressGame}>Back to Start</button>
      <h2 id="container-title">
        <b>Picked Pokémon:</b>
      </h2>
      <PokemonContainer pokemon={history} />
    </div>
  );
}

EndScreen.propTypes = {
  history: PropTypes.arrayOf(PropTypes.number),
  hScore: PropTypes.number,
  progressGame: PropTypes.func,
  total: PropTypes.number,
  everHScore: PropTypes.objectOf({ current: PropTypes.number }),
};

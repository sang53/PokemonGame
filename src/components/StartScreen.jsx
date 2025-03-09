import PokemonContainer from "./PokemonContainer";
import { APIHandler } from "./APIHandler";
import "../styles/StartScreen.css";
import PropTypes from "prop-types";

export default function StartScreen(props) {
  return (
    <div id="main" className="flex">
      <h1 id="title">Pokémon Memory Game</h1>
      <div id="selectors" className="flex">
        <PokedexSelector changeDex={props.changeDex} currDex={props.currDex} />
        <TotalSelector
          currDex={props.currDex}
          pokemon={props.pokemon}
          changeTotal={props.changeTotal}
        />
      </div>
      <div className="flex" id="start-buttons">
        <button onClick={props.progressGame}>Start</button>
        <button onClick={props.reshuffle}>Re-shuffle</button>
      </div>

      <PokemonContainer pokemon={props.pokemon} />
    </div>
  );
}

function PokedexSelector({ currDex, changeDex }) {
  const pokedexArr = APIHandler.getAllPokedex();

  const dexOptions = pokedexArr ? (
    pokedexArr.map((pokedex) => {
      return (
        <option key={pokedex.id} value={pokedex.idx}>
          {pokedex.name}
        </option>
      );
    })
  ) : (
    <option>Loading Pokedex</option>
  );

  return (
    <div className="flex">
      <label>Select Pokédex:</label>
      <select
        name="pokedex"
        id="pokedex-select"
        value={currDex}
        onChange={(e) => changeDex(e.target.value)}
      >
        {dexOptions}
      </select>
    </div>
  );
}

function TotalSelector({ pokemon, changeTotal, currDex }) {
  return (
    <div className="flex">
      <label>Total Pokémon:</label>
      <input
        type="number"
        min="10"
        defaultValue={pokemon.length ? pokemon.length : 30}
        onBlur={(e) => {
          e.target.value = parseInt(e.target.value);
          if (parseInt(e.target.value) === pokemon.length) return;
          if (e.target.value < 10) e.target.value = 10;
          else if (e.target.value > APIHandler.getMax(currDex))
            e.target.value = APIHandler.getMax(currDex);
          changeTotal(e.target.value);
        }}
      />
    </div>
  );
}

StartScreen.propTypes = {
  changeDex: PropTypes.func,
  currDex: PropTypes.number,
  changeNum: PropTypes.func,
  numDisplay: PropTypes.number,
  pokemon: PropTypes.arrayOf(PropTypes.number),
  changeTotal: PropTypes.func,
  progressGame: PropTypes.func,
  reshuffle: PropTypes.func,
};

PokedexSelector.propTypes = {
  currDex: PropTypes.number,
  changeDex: PropTypes.func,
};

TotalSelector.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.number),
  changeTotal: PropTypes.func,
  currDex: PropTypes.number,
};

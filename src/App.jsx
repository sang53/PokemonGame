import { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import EndScreen from "./components/EndScreen";
import { APIHandler } from "./components/APIHandler";
import { useStorage } from "./hooks/useStorage";

const DEFAULT_DEX = 3;
const DEFAULT_POKENUM = 30;
const DEFAULT_DISPLAYNUM = 10;

function App() {
  const [gameStage, setGameStage] = useState(0);
  const [currDex, setCurrDex] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [history, setHistory] = useState([]);
  const [hScore, updateHScore, everHScore] = useStorage();

  useEffect(() => {
    async function initPokedex() {
      await APIHandler.init();
      setCurrDex(DEFAULT_DEX);
      await APIHandler.loadDex(DEFAULT_DEX);
      // re-render with proper random pokemon ids once pokedex information is loaded
      setPokemon(APIHandler.getRandomIds(DEFAULT_POKENUM, DEFAULT_DEX));
    }
    initPokedex();
  }, []);

  async function changeDex(idx) {
    await APIHandler.loadDex(idx);
    setCurrDex(idx);
    setPokemon(APIHandler.getRandomIds(pokemon.length, idx));
  }

  function changeTotal(num) {
    if (pokemon.length) setPokemon(APIHandler.getRandomIds(num, currDex));
  }

  function reshuffle() {
    setPokemon(APIHandler.getRandomIds(pokemon.length, currDex));
  }

  function progressGame() {
    setGameStage(gameStage + 1);
    switch (gameStage) {
      case 1:
        updateHScore(history.length);
        break;
      case 2:
        setHistory([]);
        setGameStage(0);
        setPokemon(APIHandler.getRandomIds(pokemon.length, currDex));
    }
  }

  // re-shuffle through re-render if called with no arguments
  // add selected pokemon to history & check if already selected
  function addHistory(id) {
    if (!id) return setHistory([...history]);

    const numId = +id.slice(8);
    if (history.includes(numId) || history.length === pokemon.length - 1)
      progressGame();
    setHistory([...history, numId]);
  }

  const initProps = {
    changeTotal,
    currDex,
    changeDex,
    pokemon,
    progressGame,
    reshuffle,
  };
  const gameProps = {
    pokemon,
    addHistory,
    history,
    numDisplay: DEFAULT_DISPLAYNUM,
  };
  const endProps = {
    history,
    hScore,
    progressGame,
    total: pokemon.length,
    everHScore,
  };

  switch (gameStage) {
    case 0:
      return <StartScreen {...initProps} />;
    case 1:
      return <GameScreen {...gameProps} />;
    case 2:
      return <EndScreen {...endProps} />;
  }
}

export default App;

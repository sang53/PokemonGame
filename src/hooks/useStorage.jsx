import { useRef } from "react";
import { useState } from "react";

export function useStorage() {
  const [hScore, setHScore] = useState(0);
  const everHScore = useRef(0);
  everHScore.current = Number(localStorage.getItem("hscore"));

  const updateHScore = (score) => {
    if (score > hScore) setHScore(score);
    if (score > everHScore.current) {
      everHScore.current = score;
      localStorage.setItem("hscore", JSON.stringify(score));
    }
  };

  return [hScore, updateHScore, everHScore];
}

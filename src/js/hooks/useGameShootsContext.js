import { useContext } from "react";

import { GameShootsContext } from "../context/GameShootsContext";

const useGameShootsContext = () => {
  const gameShoots = useContext(GameShootsContext);

  return { ...gameShoots };
};

export default useGameShootsContext;

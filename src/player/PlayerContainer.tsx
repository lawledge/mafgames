import React from "react";
import { useSelector } from "react-redux";
import { Player } from "./Player";
import { CurrentGame } from "../game/gameInterface";
// const handler = useCallback(() => {
//   dispatch(setGame());
// }, []);
interface RootState {
  curGame: CurrentGame;
}

const checkState = (state: RootState) => state;

export const PlayerContainer: React.FC = () => {
  const state = useSelector(checkState);

  // if curgame set on store

  return (
    <>
      {state.curGame.currentGame.id !== 0 ? (
        <Player currentGame={state.curGame.currentGame} />
      ) : (
        ""
      )}
    </>
  );
};

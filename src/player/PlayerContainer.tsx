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

// import axios from "axios";
// конфликт из-за отсутствия провайдера
// import { connect } from "react-redux";
// import { setGame } from "../store/game/actions";
// сюда надо импортнуть ф-ю из PlayerContainer, которую повесить потом на OnChange

export const PlayerContainer: React.FC = () => {
  const state = useSelector(checkState);
  console.log(state);
  console.log(state.curGame.currentGame.id);

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

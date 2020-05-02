import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "./Game";
import { loadGames } from "./gameActionCreator";
import { GameResponse } from "./gameInterface";
import { CurrentGame } from "./gameInterface";
interface RootState {
  game: GameResponse;
  player: object;
  curGame: CurrentGame;
}

const checkDefaultState = (state: RootState) => state;

// const handler = useCallback(() => {
//   dispatch(setGame());
// }, []);

// import axios from "axios";
// конфликт из-за отсутствия провайдера
// import { connect } from "react-redux";
// import { setGame } from "../store/game/actions";
// сюда надо импортнуть ф-ю из PlayerContainer, которую повесить потом на OnChange

export const GameContainer: React.FC = () => {
  const dispatch = useDispatch();

  const selectIsChanged = () => {};
  const state = useSelector(checkDefaultState);
  useEffect(() => {
    console.log(state);
    dispatch(loadGames());
  }, []);

  return (
    <>
      <Game
        selectIsChanged={selectIsChanged}
        loadedGameList={state.game}
        currentIsSet={
          state.curGame.currentGame.id != 0 ? state.curGame.currentGame.id : 0
        }
      />
    </>
  );
};

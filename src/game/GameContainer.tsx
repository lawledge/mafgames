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
          state.curGame.currentGame.start
            ? state.curGame.currentGame
            : undefined
        }
      />
    </>
  );
};

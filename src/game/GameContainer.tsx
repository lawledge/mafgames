import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Game } from "./Game";
import { loadGames } from "./gameActionCreators";

interface RootState {
  game: object;
  player: object;
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

  const selectIsChanged = () => {
    dispatch(loadGames());
    // console.log("1337");
  };
  const loadedGameList = useSelector(checkDefaultState);
  useEffect(() => {
    // showCurrentSumrakGame();
    // отсюда должен триггериться экшен, дальше идти в сагу и после в стор,
    // и печататься из стора в дочке (пропсы прокинуть через useSelector)
    // action триггерится
    dispatch(loadGames());
    // console.log("refreshed");
  }, []);

  return (
    <>
      {console.log(loadedGameList)}
      <Game selectIsChanged={selectIsChanged} />
    </>
  );
};

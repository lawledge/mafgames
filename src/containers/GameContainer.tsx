import React, { useEffect } from "react";
import useCallback, { useDispatch, useSelector } from "react-redux";
import { Game } from "../components/Game";
// import action
import { setGame } from "../core/actionCreators/gameActionCreators";

interface RootState {
  game: object;
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
    dispatch(setGame());
    console.log("1337");
  };
  const gameList = useSelector(checkDefaultState);
  return (
    <>
      {console.log(gameList.game)}
      <Game selectIsChanged={selectIsChanged} />
    </>
  );
};

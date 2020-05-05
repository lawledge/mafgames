import React from "react";
import { useSelector } from "react-redux";
import { Game } from "./Game";
import { GameResponse, GameFromServer, CurrentGame } from "./gameInterface";

interface RootState {
  game: GameResponse;
  player: object;
  curGame: CurrentGame;
  fav: {
    favorite: GameFromServer[];
  };
}

const checkDefaultState = (state: RootState) => state;

export const GameContainer: React.FC = () => {
  const state = useSelector(checkDefaultState);

  // const checkFavIsSet = (curgame: number, fn: (check: boolean) => void) => {
  //   state.fav.favorite.filter((game) => {
  //     fn(curgame == game.id ? true : false);
  //   });
  // };

  return (
    <>
      <Game
        loadedGameList={state.game}
        currentIsSet={
          state.curGame.currentGame.start
            ? state.curGame.currentGame
            : undefined
        }
        // favIsSet={checkFavIsSet}
      />
    </>
  );
};

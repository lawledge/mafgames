import { GameFromServer } from "./gameInterface";
import * as actions from "./gameActionTypes";

export const setGame = (currentGame: GameFromServer) => ({
  type: actions.SET_CURRENT_GAME,
  payload: currentGame,
});

export const loadGames = () => ({
  type: actions.LOAD_GAME_LIST,
});

export const setFav = (favGame: any) => ({
  type: actions.SET_FAVORITE_GAME,
  payload: favGame,
});

export const putGames = (gamesFromServer: GameFromServer) => ({
  type: actions.PUT_GAME_LIST,
  payload: gamesFromServer,
});

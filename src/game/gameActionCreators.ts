import { GameFromServer } from "./gameInterfaces";
import * as actions from "./gameActionTypes";

interface ISetGame {
  type: string;
  // payload?: GameInterface;
}

export const setGame = (): ISetGame => ({
  type: actions.SET_CURRENT_GAME,
  // payload: game,
});

export const loadGames = () => ({
  type: actions.LOAD_GAME_LIST,
});

export const putGames = (gamesFromServer: GameFromServer) => ({
  type: actions.PUT_GAME_LIST,
  payload: gamesFromServer,
});

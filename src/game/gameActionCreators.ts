import * as actions from "./gameActionTypes";

export interface gameResponse {
  r: string;
  games: Game;
}

export interface Game {
  id: number;
  start: Date;
  ul: string;
  vip: boolean;
  player_count: number;
  constructor: boolean;
  users: UserId[];
}

export interface UserId {
  [key: number]: string;
}

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

export const putGames = (gamesFromServer: Game) => ({
  type: actions.PUT_GAME_LIST,
  payload: gamesFromServer,
});

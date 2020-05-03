import { GameFromServer } from "../game/gameInterface";
export const CHECK_PLAYER_STATS = "CHECK PLAYER STATS";

export const setGame = (currentGame: GameFromServer) => ({
  type: CHECK_PLAYER_STATS,
  payload: currentGame,
});

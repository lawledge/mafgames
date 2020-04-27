import { combineReducers } from "redux";
import { gameReducer } from "../game/gameReducers";
import { playerReducer } from "../player/playerReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
});

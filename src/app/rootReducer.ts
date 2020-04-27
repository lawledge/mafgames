import { combineReducers } from "redux";
import { gameReducer } from "../game/gameReducer";
import { playerReducer } from "../player/playerReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
});

import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { statsReducer } from "./playerReducer";

export default combineReducers({
  current_game: gameReducer,
  stats: statsReducer,
});

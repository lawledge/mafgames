// import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
// import storage from "redux-persist/lib/storage";

import { currentGameReducer } from "./../game/gameReducer";
import { gameReducer } from "../game/gameReducer";
import { playerReducer } from "../player/playerReducer";

export const rootReducer = combineReducers({
  game: gameReducer,
  curGame: currentGameReducer,
  // player: playerReducer,
});

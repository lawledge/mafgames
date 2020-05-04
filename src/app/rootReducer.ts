import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import { currentGameReducer, setFavGameReducer } from "./../game/gameReducer";
import { gameReducer } from "../game/gameReducer";
import { playerReducer } from "../player/playerReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["fav"],
};

export const rootReducer = combineReducers({
  game: gameReducer,
  curGame: currentGameReducer,
  player: playerReducer,
  fav: setFavGameReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

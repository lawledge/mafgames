import * as actions from "../actionTypes/gameActionTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGames } from "../api/gameApi";
import { putGames } from "../actionCreators/gameActionCreators";

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

export function* watchLoadGameList() {
  yield takeEvery(actions.LOAD_GAME_LIST, requestLoadGameList);
}

export function* requestLoadGameList() {
  try {
    const gameList = yield call(fetchGames);

    yield put(putGames(gameList.games));
    console.log(gameList);
    // gameList.games put
    // console.log(JSON.stringify(gameList.games));
    // yield put()
    // yield put(authSuccess(token, action.meta));
  } catch (e) {
    console.log(e);
  }
}

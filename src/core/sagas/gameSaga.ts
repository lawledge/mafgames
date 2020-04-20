import * as actions from "../actionTypes/gameActionTypes";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchGames } from "../api/gameApi";

export function* watchListOfGames() {
  yield takeEvery(actions.LOAD_LIST_OF_GAMES, requestListOfGames);
}

export function* requestListOfGames() {
  try {
    const generatedNum = yield call(fetchGames);

    yield console.log(generatedNum);
    // yield put(authSuccess(token, action.meta));
  } catch (e) {
    console.log(e);
  }
}

// function* requestListOfGames() {
//   yield console.log("requestListOfGames is working");
// }

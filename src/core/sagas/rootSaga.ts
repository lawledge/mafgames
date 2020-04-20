import { all, fork } from "redux-saga/effects";
import { watchListOfGames } from "./gameSaga";
export default function* rootSaga() {
  //   yield all([fork()]);
  yield all([fork(watchListOfGames)]);
}

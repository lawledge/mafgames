import { all, fork } from "redux-saga/effects";
import { watchLoadGameList } from "../game/gameSagas";
export default function* rootSaga() {
  //   yield all([fork()]);
  yield all([fork(watchLoadGameList)]);
}

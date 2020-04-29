import { all, fork } from "redux-saga/effects";
import { watchLoadGameList } from "../game/gameSaga";
export default function* rootSaga() {
  //   yield all([fork()]);
  yield all([fork(watchLoadGameList)]);
}

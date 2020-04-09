import { all, fork } from "redux-saga/effects";
import { gameSaga } from "./gameSaga";
export default function* rootSaga() {
  //   yield all([fork()]);
  yield all([fork(gameSaga)]);
}

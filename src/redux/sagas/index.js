import { all } from "redux-saga/effects";
import { countWatcher} from "./countSaga";
import { userWatcher } from "./usersSaga";
import { weatherSagas } from "./weatherSaga"

export function* rootWatcher() {
      yield all([countWatcher(), userWatcher(), weatherSagas()])
}
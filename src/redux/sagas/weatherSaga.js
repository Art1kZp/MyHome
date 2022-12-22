import { put, call, apply, takeEvery } from "redux-saga/effects";
import { LOAD_WEATHER_SUCCESS, LOAD_WEATHER, LOAD_WEATHER_FAILURE } from "../reducers/weatherReducer";

export function* loadWeatherList({payload}) {
    const text = payload;
    const request = yield call(
        fetch, `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=bdc99ac434a0f71ae697e7181f6707e5`
    );
    const data = yield apply(request, request.json)
    if (data.name) {
        yield put({
            type: LOAD_WEATHER_SUCCESS,
            payload: data
        })
    } else {
        yield put({
            type: LOAD_WEATHER_FAILURE,
            payload: data
        })
    }
}

export function* weatherSagas() {
    yield takeEvery(LOAD_WEATHER, loadWeatherList)
}
import {all, takeLatest, call, put} from 'redux-saga/effects';
import api from 'services/api';

import * as Constants from 'constants/weather';

function* getCurrentWeather(action) {
    try {
        const { data } = yield call(api.request.get, `/weather/?id=${action.cityId}`);

        yield put({
            type: Constants.GET_WEATHER_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error);
    }
}

function* getFutureWeather(action) {
    try {
        const { data } = yield call(api.request.get, `/forecast/?id=${action.cityId}`);

        yield put({
            type: Constants.FUTURE_WEATHER_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(error);
    }
}

export default function* root() {
    yield [
        takeLatest(Constants.GET_WEATHER_REQUEST, getCurrentWeather),
        takeLatest(Constants.FUTURE_WEATHER_REQUEST, getFutureWeather)
    ]
}
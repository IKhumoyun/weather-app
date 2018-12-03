import { all, fork} from 'redux-saga/effects';

import weather from './weather';


export default function* rootSaga() {
    yield all([
        fork(weather)
    ])
}
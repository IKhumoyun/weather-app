import * as Constants from 'constants/weather';
import moment from 'moment';

const initialState = {
    weather: {},
    future: [],
    isFetched: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.GET_WEATHER_SUCCESS: {
            return {
                ...state,
                weather: action.payload,
                isFetched: true
            }
        }

        case Constants.FUTURE_WEATHER_REQUEST:
            return {
                ...state,
                future: [],
                isFetched: false
            };
        case Constants.FUTURE_WEATHER_SUCCESS:
            return {
                ...state,
                future: action.payload.list.filter((item)=>{
                    if (moment.unix(item.dt).format('HH:mm') === '11:00') {
                        return item
                    }
                }),
                isFetched: true
            };

        default:
            return state;

    }
}
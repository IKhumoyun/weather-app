import * as Constants from 'constants/weather';

export const getInitialWeather = (cityId) => ({
    type: Constants.GET_WEATHER_REQUEST,
    cityId
});

export const getFutureWeather = (cityId) => ({
   type: Constants.FUTURE_WEATHER_REQUEST,
    cityId
});
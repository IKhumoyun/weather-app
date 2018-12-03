
const codeFilter = (weatherId) => {

    switch (true) {
        case (weatherId >= 200 && weatherId <= 232):
            return 'storming';
        case (weatherId >= 300 && weatherId <= 321):
            return 'drizzling';
        case (weatherId >= 500 && weatherId <= 531):
            return 'raining';
        case (weatherId >= 600 && weatherId <= 622):
            return 'snowing';
        case (weatherId >= 700 && weatherId <= 781):
            return 'windy';
        case (weatherId === 800):
            return 'clear';
        case (weatherId > 800 && weatherId <= 804):
            return 'cloudy';

        default: {
            return 'error'
        }
    }
};

export default {
    codeFilter
}
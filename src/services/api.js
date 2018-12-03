import axios from 'axios';

import config from '../config';

axios.defaults.params = {};
axios.defaults.params['APPID'] = config.API_KEY;
axios.defaults.params['units'] = config.API_TYPE.METRIC;

export default {
    request: axios.create({
        baseURL: config.API_ROOT
    })
};
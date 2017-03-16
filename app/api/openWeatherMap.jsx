var axios = require('axios');

const OPEM_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a1d8ead71fc748d679a64544da008147&units=imperial'

module.exports = {
    getTemp: location => {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEM_WEATHER_MAP_URL}&q=${encodedLocation}`

        return axios
            .get(requestUrl)
            .then(res => {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.messaage);
                } else {
                    return res.data.main.temp;
                }
            }, error => {
                throw new Error(error.data.messaage)
            })
    }
};
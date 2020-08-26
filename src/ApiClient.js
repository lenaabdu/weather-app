import axios from 'axios'

export class ApiClient {

    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    getWeather() {
        return this.getRequest("https://api.openweathermap.org/data/2.5/onecall?lat=51.898753&lon=-8.470631&exclude=hourly,minutely&units=metric&appid=bc8436b0fb4c2bdc41566220a43838f6")
    }

    getRequest(url) {
        return axios.get(url)
            .then(this.status)
            .catch(function(error) {
                console.error(error);
                alert(error)
            })
    }

}

import axios from 'axios';
export default {
    getWeather: () => {
        return axios.get('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=0750754af31f0eb78cfa44d9a031f4e1')
        .then( response => response.data.weather[0].description)
        .catch(function (err) {
          throw new Error(err.message)
        })
      },
}


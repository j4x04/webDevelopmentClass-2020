import { SAMPLE_ACTION_TYPE } from './types'
import weatherApi from '../api/weatherApi';



export const weatherUpdate = (payload) => {
    return {
        type: SAMPLE_ACTION_TYPE,
        sampleState: payload
    }
}




export const sampleAction = () => (dispatch) => {
    weatherApi
      .getWeather()
      .then((res) => {
        dispatch(weatherUpdate(res));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('sampleaction.js happened');
};
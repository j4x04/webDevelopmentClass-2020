import {SAMPLE_ACTION_TYPE} from "./types.jsx"


export const sampleAction = (payload) =>  {
    dispatch(counterPlus(payload));
}

export const counterPlus = (payload) => {
    return {
        type: SAMPLE_ACTION_TYPE, 
        sampleState: payload
    }
} 
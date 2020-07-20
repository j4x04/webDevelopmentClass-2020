import { SAMPLE_ACTION_TYPE } from '../actions/types'
export const sampleReducer = (state=2, action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            console.log('action processed by reducer');
            return {
                sampleState: action.sampleState
            };
        default:
            return state;
    }
}
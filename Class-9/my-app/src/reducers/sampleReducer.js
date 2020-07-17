
import { SAMPLE_ACTION_TYPE} from '../actions/types.jsx'



export const sampleReducer = (state = '', action) => {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE: 
            return {
                sampleState: action.sampleState
            }
        default: 
            return state; 
    }
}





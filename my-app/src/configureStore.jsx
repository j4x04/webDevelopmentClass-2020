import * as redux from 'redux';
import {sampleReducer} from "../reducers/SampleReducer"


export const configure = () => {
    const reducer = () => redux.combineReducers({
        sampleReducer = sampleReducer, 
    });

    const store = redux.createStore(reducer());
    return store;
}

 







import {combineReducers,createStore} from 'redux'
export const  Practice=()=>{
    const store=createStore(
        combineReducers({

        }),
        windows.__REDUX__DEVROOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}
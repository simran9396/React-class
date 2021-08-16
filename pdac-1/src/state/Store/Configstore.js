import {
    combineReducers,
    createStore
} from 'redux'

import {
    cardReducer
} from '../reducer/groupReducer'
import {
    empdetailsReducer
} from '../reducer/EmpdeatailsReducer'
export const Configstore = () => {
    const store = createStore(
        combineReducers({
            cardReducer,
            empdetailsReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
    return store
}
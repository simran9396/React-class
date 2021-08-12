import {
    combineReducers,
    createStore
} from 'redux'

import {
    cardReducer
} from '../reducer/groupReducer'
export const Configstore = () => {
    const store = createStore(
        combineReducers({
            cardReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
    return store
}
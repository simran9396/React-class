import React from 'react'
import { combineReducers, createStore } from 'redux'


export const Configstore = () => {
    const store=createStore(
        combineReducers({
         
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()

    )
    return store
}

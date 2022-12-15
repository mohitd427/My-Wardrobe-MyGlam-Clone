import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"


const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;


const store=legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk)) )

export  {store};
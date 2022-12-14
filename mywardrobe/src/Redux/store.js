import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import appReducer from "./App/appReducer"
import thunk from "redux-thunk"


const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;

//const rootReducer=combineReducers(appReducer)

const store=legacy_createStore(appReducer,
    composeEnhancer(applyMiddleware(thunk)) )

export  {store};
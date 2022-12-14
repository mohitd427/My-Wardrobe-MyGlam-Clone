import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import appReducer from "./App/appReducer";
import {userReducer}  from "./Auth/authReducer"
import thunk from "redux-thunk"


const composeEnhancer=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_||compose;

const rootReducer=combineReducers({appReducer, 
    user: userReducer})

const store=legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk)) )

export  {store};
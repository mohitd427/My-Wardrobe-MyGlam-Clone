import {legacy_createStore,applyMiddleware, compose, combineReducers} from "redux"
import {reducer as productReducer} from "./App/Products/reducer"
import {reducer as bagReducer} from "./App/Bag/reducer"
import {reducer as addressReducer} from "./App/Address/reducer"
import thunk from "redux-thunk"


const composeEnhancer=window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;

const rootReducer=combineReducers({productReducer, bagReducer, addressReducer})

const store=legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk)) )

export  {store};
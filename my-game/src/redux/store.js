import React from "react";
import {combineReducers, compose, createStore} from "redux";
import {warMapReducer} from "../WarMap/WarMapReducer";



const initialState = {
    state: [],
}
const rootReducer = combineReducers({
        warMap: warMapReducer,
    }
)

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

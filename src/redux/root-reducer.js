import {combineReducers} from "@reduxjs/toolkit";
import {reducer as dataReducer} from "./data-slice";
import {reducer as checkReducer} from "./check-slice";

export const rootReducer = combineReducers({
    dataReducer: dataReducer,
    checkReducer: checkReducer,
})

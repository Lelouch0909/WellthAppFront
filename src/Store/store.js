import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { regimeReducers } from "./Regime/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  regime: regimeReducers
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));

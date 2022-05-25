import { createStore, combineReducers } from "redux";
import Reducer from "../reducers";

const initialState = {};
const reducers = combineReducers({
  auth: Reducer,
});

const store = createStore(reducers, initialState);
export default store;

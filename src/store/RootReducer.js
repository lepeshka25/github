import {combineReducers} from "redux";
import {SearchReducer} from "./Search/search-reducer";

export const RootReducer = combineReducers({
	search: SearchReducer
})
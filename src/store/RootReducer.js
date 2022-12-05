import {combineReducers} from "redux";
import {ModalReducer} from "./Modal/modal-reducer";
import {DataReducer} from "./Data/data-reducer";

export const RootReducer = combineReducers({
	modal: ModalReducer,
	data: DataReducer
})
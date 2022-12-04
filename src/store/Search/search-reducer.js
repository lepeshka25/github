import {ADD_SEARCH} from "./search-constant";

export const SearchReducer = (state = null , action) => {
	switch (action.type){
		case ADD_SEARCH: {
			return action.payload
		}
		default: {
			return state
		}
	}
}
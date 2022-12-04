import {ADD_SEARCH} from "./search-constant";

export const addSearch = (value) => ({
	payload: value,
	type: ADD_SEARCH,
})
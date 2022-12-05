import {ADD_DATA, FILTER_LAST_UPDATE, FILTER_NAMES, FILTER_STARS} from "./data-constant";

export const addDataAction = (payload) => ({
	type: ADD_DATA,
	payload
})

export const filterLastUpdateAction = () => ({
	type: FILTER_LAST_UPDATE,
})

export const filterNamesAction = () => ({
	type: FILTER_NAMES,
})

export const filterStars = () => ({
	type: FILTER_STARS,
})
import {ADD_DATA, FILTER_LAST_UPDATE, FILTER_NAMES, FILTER_STARS} from "./data-constant";

export const DataReducer = (state = [] , action) => {
	switch (action.type){
		case ADD_DATA: {
			return action.payload
		}
		case FILTER_NAMES: {
			return state.sort((a , b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
		}
		case FILTER_LAST_UPDATE: {
			return state.sort((a , b) => {
				let aDate = a.updated_at.slice(0 , 10)
				let bDate = b.updated_at.slice(0 , 10)

				if(aDate > bDate){
					return 1
				}else {
					return -1
				}
			})
		}
		case FILTER_STARS: {
			return state.sort((a , b) => a.stargazers_count > b.stargazers_count ? 1 : -1)
		}
		default: {
			return state
		}
	}
}
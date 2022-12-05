import {TOGGLE_MODAL} from "./modal-constant";

export const ModalReducer = (state = false , action) => {
	switch (action.type){
		case TOGGLE_MODAL: {
			return action.payload
		}
		default: {
			return state
		}
	}
}
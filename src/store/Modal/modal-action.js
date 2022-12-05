import {TOGGLE_MODAL} from "./modal-constant";

export const toggleAction = (boolean) => ({
	payload: boolean,
	type: TOGGLE_MODAL,
})
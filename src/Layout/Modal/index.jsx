import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterLastUpdateAction, filterNamesAction, filterStars} from "../../store/Data/data-actions";
import {toggleAction} from "../../store/Modal/modal-action";
import cs from './Modal.module.scss';

const Modal = () => {
	const dispatch = useDispatch()
	const stateModal = useSelector(state => state.modal)


	return (
		<div
			onClick={() => dispatch(() => dispatch(toggleAction(false)))}
			style={stateModal ? {display: 'block'} : {display: 'none'}}
			className={cs.modal}
		>

			<div onClick={e => e.stopPropagation()} className={cs.container_sort}>
				<button onClick={() => dispatch(filterLastUpdateAction())}>Last Update</button>
				<button onClick={() => dispatch(filterNamesAction())}>Name</button>
				<button onClick={() => dispatch(filterStars())}>Stars</button>
			</div>

		</div>
	);
};

export default Modal;
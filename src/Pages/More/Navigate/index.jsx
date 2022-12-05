import React from 'react';
import {listCarusel} from "../../../utils";
import {useDispatch} from "react-redux";
import {toggleAction} from "../../../store/Modal/modal-action";
import cs from './Navigate.module.scss';

const Navigate = ({searchInput}) => {
	const dispatch = useDispatch()

	function toggleModal(){
		dispatch(toggleAction(true))
	}

	return (
		<div className={cs.navigate}>

			<div className={cs.navigate_container}>
				<div className={cs.scroll_container}>
					{
						listCarusel.map(({id , title , Icon}) => (
							<div key={id} className={cs.item}>
								{Icon} <p>{title}</p>
							</div>
						))
					}
				</div>
			</div>

			<div className={cs.search_create_sort_repository}>
				<input
					onChange={e => searchInput(e.target.value === '' ? null : e.target.value)}
					type="text"
					placeholder={'Find a repository'}
				/>
				<button>Type</button>
				<button>Language</button>
				<button onClick={toggleModal}>Sort</button>
			</div>

		</div>
	);
};

export default Navigate;
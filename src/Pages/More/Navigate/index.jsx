import React from 'react';
import {listCarusel} from "../../../utils";
import cs from './Navigate.module.scss';

const Navigate = ({setInput}) => {
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
					onChange={e => setInput(e.target.value === '' ? null : e.target.value)}
					type="text"
					placeholder={'Find a repository'}
				/>
				<button>Type</button>
				<button>Language</button>
				<button>Sort</button>
			</div>

		</div>
	);
};

export default Navigate;
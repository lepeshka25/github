import React from 'react';
import {WithLayoutMore} from "../../Layout/Layout";
import star from '../../assets/star.svg';
import Navigate from "./Navigate";
import axios from "axios";
import {useParams} from "react-router-dom";
import {processChanges} from "../../hook/useDebounce";
import {useDispatch} from "react-redux";
import {addDataAction} from "../../store/Data/data-actions";
import {store} from "../../store";
import {BiDownArrow} from "react-icons/bi";
import cs from './More.module.scss';

const More = () => {
	const {names} = useParams()
	const dispatch = useDispatch()
	const [data , setData] = React.useState([])
	const [newData , setNewData] = React.useState([])

	React.useEffect(() => {
		axios.get(`https://api.github.com/users/${names}/repos`)
			.then(res => dispatch(addDataAction(res.data)))
		// eslint-disable-next-line
	}, [names])

	store.subscribe(() => {
		const {data} = store.getState(state => state)
		setData(data)
		searchInput(null)
	})

	React.useEffect(() => {
		searchInput(null)
		// eslint-disable-next-line
	}, [data])

	function searchInput(value){
		processChanges(data , setNewData, 'includes', value !== null ? value : 'all')
	}

	const {value} = React.useMemo(() => ({
		value: newData
	}), [newData])

	// console.log('2022-11-12' , '2022-01-12')

	return (
		<div className={cs.more}>
			<Navigate searchInput={searchInput}/>

			<div className={cs.container_cards}>

				{
					value.map(({name, language , updated_at, visibility, id, stargazers_count}) => (
						<div key={id} className={cs.card}>

							<div className={cs.info_repository}>
								<p className={cs.name_repository}>{name}</p>
								<span className={cs.public}>{visibility}</span>
							</div>

							<div className={cs.btn_container}>
								<div className={cs.dropDown}>
									<span><img src={star} alt=""/> <pre>Star</pre></span>
									<BiDownArrow className={cs.icon}/>
								</div>
							</div>

							<div className={cs.update_lang_repository}>
								<p
									className={cs.lang}>
									<span
										style={language
											? {background: `var(--${language})`}
											: {background: 'yellow'}
										}
									>
									</span>
									{language}
								</p>

								{
									stargazers_count >= 1 && (
										<div className={cs.star_container}>
											<img src={star} alt=""/>
											<p>{stargazers_count}</p>
										</div>
									)
								}

								<span className={cs.update}>{updated_at.slice(0, 10)}</span>
							</div>

						</div>
					))
				}

			</div>

			<div className={cs.pagination_container}>

			</div>

		</div>
	);
};

export default WithLayoutMore(More);

//name
//language
//updated_at
//stargazers_count
//visibility
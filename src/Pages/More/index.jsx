import React from 'react';
import {WithLayoutMore} from "../../Layout/Layout";
import Navigate from "./Navigate";
import StarDropDown from "../../components/StarDropDown";
import axios from "axios";
import {useParams} from "react-router-dom";
import cs from './More.module.scss';

const More = () => {
	const {names} = useParams()
	const [data , setData] = React.useState([])

	React.useEffect(() => {
		axios.get(`https://api.github.com/users/${names}/repos`)
			.then(res => setData(res.data))
	}, [names])

	const value = React.useMemo(() => ({
		data
	}), [data])

	return (
		<div className={cs.more}>
			<Navigate/>

			<div className={cs.container_cards}>

				{
					value?.data.map(({name, language , updated_at, visibility, id}) => (
						<div key={id} className={cs.card}>

							<div className={cs.info_repository}>
								<p className={cs.name_repository}>{name}</p>
								<span className={cs.public}>{visibility}</span>
							</div>

							<div className={cs.btn_container}>
								<StarDropDown/>
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
								<span className={cs.update}>{updated_at}</span>
							</div>

						</div>
					))
				}

			</div>

		</div>
	);
};

export default WithLayoutMore(More);

//name
//language
//updated_at
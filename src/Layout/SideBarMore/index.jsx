import React from 'react';
import cn from "classnames";
import follow from '../../assets/Follow.svg';
import axios from "axios";
import {useParams} from "react-router-dom";
import cs from './style.module.scss';

const SideBarMore = ({className , ...props}) => {
	const {names} = useParams()
	const [user , setUser] = React.useState(null)

	React.useEffect(() => {
		axios.get(`https://api.github.com/users/${names}`)
			.then(res => setUser(res.data))
	}, [names])

	const {value} = React.useMemo(() => ({
		value: user
	}), [user])

	if(!value){
		return <div></div>
	}

	return (
		<div {...props} className={cn(cs.sideBarMore , className)}>

			<div className={cs.user_profile}>
				<img
					className={cs.avatar}
					src={value.avatar_url}
					alt=""
				/>
				<div className={cs.container_name}>
					<h1>{value.login}</h1>
					<p>{value.name}</p>
				</div>
			</div>

			<div className={cs.container_follow}>

				<div className={cs.container_bio_followers}>
					<div className={cs.container_bio}>
						<p>
							{value.bio}
						</p>
					</div>
					<div className={cs.container_followers}>
						<img className={cs.icon} src={follow} alt=""/>
						<p><span>{value.followers}</span>followers</p>
						<p><span>{value.following}</span>following</p>
					</div>
				</div>

				<button className={cs.btn}>Follow</button>
			</div>

			<div className={cs.achievements}>
				<h1>Achievements</h1>
				<div className={cs.container_achievements}>
					<img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" alt=""/>
					<img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" alt=""/>
				</div>
				<div className={cs.container_btn_feedback}>
					<button>Beta</button>
					<button>Send feedback</button>
				</div>
				<p className={cs.lorem}>Block or Report</p>
			</div>

		</div>
	);
};

export default SideBarMore;
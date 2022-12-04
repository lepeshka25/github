import React from 'react';
import axios from "axios";
import overview from '../../assets/overview.svg';
import project from '../../assets/project.svg';
import {useParams} from "react-router-dom";
import {WithLayoutMore} from "../../Layout/Layout";
import {SlUserFollowing} from "react-icons/sl";
import {FiBook} from "react-icons/fi";
import {GoPackage} from "react-icons/go";
import {GiStarShuriken} from "react-icons/gi";
import cs from './More.module.scss';
import StarDropDown from "../../components/StarDropDown";

const listCarusel = [
	{
		id: 1,
		title: 'Overview',
		Icon: <img src={overview} alt={''} className={cs.icon}/>
	},
	{
		id: 2,
		title: 'Repositories',
		Icon: <FiBook className={cs.icon}/>
	},
	{
		id: 3,
		title: 'Projects',
		Icon: <img src={project} alt={''} className={cs.icon}/>
	},
	{
		id: 4,
		title: 'Packages',
		Icon: <GoPackage className={cs.icon}/>
	},
	{
		id: 5,
		title: 'Stars',
		Icon: <GiStarShuriken className={cs.icon}/>
	},
]

const More = () => {
	const {names} = useParams()
	const [user , setUser] = React.useState(null)
	const [data , setData] = React.useState(null)

	React.useEffect(() => {
		// axios.get(`https://api.github.com/users/${names}`)
		// 	.then(res => setUser(res.data))
		// axios.get(`https://api.github.com/users/${names}/repos`)
		// 	.then(res => setData(res.data))
		// eslint-disable-next-line
	}, [])

	if(!user){
		return <div></div>
	}

	return (
		<div className={cs.more}>
			<div className={cs.userProfile}>
				<div className={cs.userProfile_header}>
					<img className={cs.avatar} src={user.avatar_url} alt=""/>
					<p className={cs.name}>{user.name}</p>
					<p className={cs.login}>{user.login}</p>
				</div>

				<div className={cs.followers}>
					<SlUserFollowing className={cs.icon}/>
					<span><span>{user.followers}</span>followers</span>
					<span><span>{user.following}</span>following</span>
				</div>

				<button className={cs.follow}>Follow</button>

				<p className={cs.bio}>
					{user.bio}
				</p>

			</div>

			<div className={cs.carusel}>
				{
					listCarusel.map(({title , id , Icon}) => (
						<div className={cs.card} key={id}>
							{Icon}<span style={title === 'Repositories' ? {color: "white"} : null}>{title}</span>
						</div>
					))
				}
			</div>

			<div className={cs.repository_sort}>
				<div className={cs.sorts}>
					<input placeholder={'Find a repository…'} type="text"/>
					<select>
						<option defaultValue={'LastUpdated'}>Last updated</option>
						<option value="Name">Name</option>
						<option value="Stars">Stars</option>
					</select>
				</div>
			</div>

			<div className={cs.repository_container}>
				{
					data?.map(({name, language, updated_at}) => (
						<div key={name} className={cs.repository}>
							<div className={cs.repository_header}>
								<div className={cs.container_info_repository}>
									<p>{name}</p>
									<span>Private</span>
								</div>
								<StarDropDown/>
							</div>
							<div className={cs.repository_body}>
								{
									language ? (
										<p><span style={{background: `var(--${language}`}}></span>{language}</p>
									) : (
										<p><span style={{background: `var(--JavaScript`}}></span>JavaScript</p>
									)
								}
								<small>{updated_at}</small>
							</div>
						</div>
					))
				}
			</div>

		</div>
	);
};

// export default WithLayoutMore(More2);


//name
//language
//updated_at
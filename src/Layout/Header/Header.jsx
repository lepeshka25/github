import React from 'react';
import burger from '../../assets/burger.svg';
import signOut from '../../assets/signOut.svg';
import plus from '../../assets/plus.svg';
import notification from '../../assets/notification.svg';
import logo from '../../assets/logo.svg'
import cn from 'classnames'
import {useNavigate} from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import InputSearch from "../../components/InputSearch";
import cs from './Header.module.scss'

const list = [
	{
		id: 1,
		title: 'Pull requests',
	},
	{
		id: 2,
		title: 'Issues',
	},
	{
		id: 3,
		title: 'Codespaces',
	},
	{
		id: 4,
		title: 'Marketplace',
	},
	{
		id: 5,
		title: 'Explore',
	},
]

const listMobile = [
	{
		id: 1,
		title: 'Dashboard'
	},
	{
		id: 2,
		title: 'Pull requests',
	},
	{
		id: 3,
		title: 'Issues',
	},
	{
		id: 4,
		title: 'Codespaces',
	},
	{
		id: 5,
		title: 'Marketplace',
	},
	{
		id: 6,
		title: 'Explore',
	},
	{
		id: 7,
		title: 'Sponsors',
	},
	{
		id: 8,
		title: 'Settings',
	},
]

const Header = ({className ,...props}) => {
	const Navigate = useNavigate();
	const [sideBar , setSideBar] = React.useState(false)
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cn(className, cs.header)} {...props}>
			{
				!isLaptop && (
					<div className={cs.mobile}>
						<div className={cs.top}>
							<img onClick={() => setSideBar(state => !state)} className={cs.burger} src={burger} alt=""/>
							<img onClick={() => Navigate('/')} className={cs.logo} src={logo} alt=""/>
							<img className={cs.notification} src={notification} alt=""/>
						</div>
						<div
							className={cn(cs.bottom, {
								[cs.active]: sideBar === true
							})}
						>
							<ul className={cs.list}>
								<li>
									<InputSearch/>
								</li>
								{
									listMobile.map(({title, id}) => <li key={id}>{title}</li>)
								}
								<li>
									<div className={cs.avatar_container}>
										<img src="https://avatars.githubusercontent.com/u/104206949?s=40&amp;v=4" alt="lepeshka25"
												 height="20" width="20" data-view-component="true" className={cs.avatar}/>
										<pre> lepeshka25</pre>
									</div>
								</li>
								<li>
									<div className={cs.signOut_Container}>
										<img src={signOut} alt=""/>
										<pre> Sign out</pre>
									</div>
								</li>
							</ul>
						</div>
					</div>
				)
			}

			{
				isLaptop && (
					<div className={cs.laptop}>
						<div className={cs.container_laptop}>
							<div className={cs.logo}>
								<img onClick={() => Navigate('/')} src={logo} alt=""/>
							</div>

							<div className={cs.container}>
								<InputSearch/>
								<ul className={cs.list}>
									{list.map(({title , id}) => <li key={id}>{title}</li>)}
								</ul>
							</div>
						</div>

						<div className={cs.user_container}>
							<img className={cs.notification} src={notification} alt=""/>
							<img className={cs.plus} src={plus} alt=""/>
							<img src="https://avatars.githubusercontent.com/u/104206949?s=40&amp;v=4" alt="@lepeshka25"
									 height="20" width="20" data-view-component="true" className={cs.avatar}/>
						</div>
					</div>
				)
			}
		</div>
	);
};

export default Header;
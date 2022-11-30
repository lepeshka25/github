import React from 'react';
import book from './book.svg';
import cn from "classnames";
import Input from "../../components/Input/Input";
import Repository from "../../components/Repository";
import cs from './Sidebar.module.scss';

const Sidebar = ({className , ...props}) => {
	const [stateRepository , setStateRepository] = React.useState(false)
	return (
		<div {...props} className={cn(className, cs.sidebar)}>
			<p className={cs.title}>Repositories</p>

			<div className={cs.sideBar_body}>
				<div className={cs.sideBar_body_container}>
					<div className={cs.sideBar_body_container2}>

						<div className={cs.header}>
							<p>Top Repositories</p>
							<button><img src={book} alt=""/> <pre> New</pre></button>
						</div>

						<Input placeholder={'Find a repository…'} cs={cs}/>

						<Repository total={stateRepository} cs={cs}/>

						<button
							onClick={() => setStateRepository(true)}
							className={cn(cs.btn, {
								[cs.active]: stateRepository === true,
							})}
						>
							Show more
						</button>
					</div>
				</div>
				<div className={cs.info}>
					<h2>Recent activity</h2>
					<div className={cs.info_container}>
						<p>
							When you take actions across GitHub, we’ll provide links to that activity here.
						</p>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Sidebar;


/*
* <div className={cn(className, cs.container)}>
			<p>Repositories</p>
			<div className={cs.sidebar} {...props}>
				<div className={cs.sidebar_container}>
					<div className={cs.sidebarTop}>
						<div className={cs.sidebarTop_container}>
							<div className={cs.header_sidebarTop_container}>
								<p>Top Repositories</p>
								<button><img src={book} alt=""/> <pre> New</pre></button>
							</div>
							<Input placeholder={'Find a repository…'} cs={cs}/>

							<Repository cs={cs}/>

							<div className={cs.info}>
								<p>Recent activity</p>
								<p>When you take actions across GitHub, we’ll provide links to that activity here.</p>
							</div>

						</div>
					</div>
				</div>
			</div>

			<div className={cs.info}>
				<p>Recent activity</p>
				<p>When you take actions across GitHub, we’ll provide links to that activity here.</p>
			</div>

		</div>
*
* */
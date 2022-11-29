import React from 'react';
import book from './book.svg';
import cn from "classnames";
import Input from "../../components/Input/Input";
import Repository from "../../components/Repository";
import cs from './Sidebar.module.scss';

const Sidebar = ({className , ...props}) => {
	return (
		<div className={cn(className, cs.sidebar)} {...props}>
			<div
				className={cs.sidebar_container}
			>
				<div className={cs.sidebarTop}>
					<div className={cs.sidebarTop_container}>
						<div>
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
	);
};

export default Sidebar;
import React from 'react';
import cn from "classnames";
import cs from './Sidebar.module.scss'

const Sidebar = ({className , ...props}) => {
	return (
		<div className={cn(className, cs.sidebar)} {...props}>
			<div className={cs.sidebar_container}>
				sidebar_container
			</div>
		</div>
	);
};

export default Sidebar;
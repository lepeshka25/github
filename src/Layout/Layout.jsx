import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import SideBarMore from "./SideBarMore";
import Modal from "./Modal";
import cs from './Layout.module.scss';

const LayoutMain = ({children}) => {
	return (
		<div className={cs.containerMain}>
			<Header className={cs.header}/>
			<div className={cs.wrapper}>
				<Sidebar className={cs.sidebar}/>
				<div className={cs.body}>
					{children}
				</div>
			</div>
		</div>
	);
};

const LayoutMore = ({children}) => {
	return (
		<div className={cs.containerMore}>
			<Header className={cs.header}/>

			<Modal/>

			<div className={cs.wrapper2}>
				<SideBarMore className={cs.sideBarMore}/>
				<div className={cs.body}>
					{children}
				</div>
			</div>

		</div>
	);
};

export const WithLayoutMain = (Component) => {
	return function withLayoutComponent (){
		return (
			<LayoutMain>
				<Component/>
			</LayoutMain>
		)
	}
}

export const WithLayoutMore = (Component) => {
	return function withLayoutComponent (){
		return (
			<LayoutMore>
				<Component/>
			</LayoutMore>
		)
	}
}
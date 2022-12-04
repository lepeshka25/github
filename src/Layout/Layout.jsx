import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import cs from './Layout.module.scss'

const LayoutMain = ({children}) => {
	return (
		<>
			<Header className={cs.header}/>
			<div className={cs.wrapper}>
				<Sidebar className={cs.sidebar}/>
				<div className={cs.body}>
					{children}
				</div>
			</div>
		</>
	);
};

const LayoutMore = ({children}) => {
	return (
		<>
			<Header className={cs.header}/>
			<div className={cs.wrapper2}>
				<div className={cs.body}>
					{children}
				</div>
			</div>
		</>
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
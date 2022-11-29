import React from 'react';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import cs from './Layout.module.scss'

const Layout = ({children}) => {
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

export const WithLayout = (Component) => {
	return function withLayoutComponent (){
		return (
			<Layout>
				<Component/>
			</Layout>
		)
	}
}
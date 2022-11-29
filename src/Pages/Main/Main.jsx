import React from 'react';
import {WithLayout} from "../../Layout/Layout";
import cs from './Main.module.scss'

const Main = () => {
	return (
		<div className={cs.main}>
			main
		</div>
	);
};

export default WithLayout(Main);
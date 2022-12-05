import React from 'react';
import {WithLayoutMore} from "../../Layout/Layout";
import Navigate from "./Navigate";
import cs from './More.module.scss';

const More = () => {
	return (
		<div className={cs.more}>
			<Navigate/>
		</div>
	);
};

export default WithLayoutMore(More);
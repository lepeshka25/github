import React from 'react';
import star from "../../assets/star.svg";
import {BiDownArrow} from "react-icons/bi";
import cs from './style.module.scss'

const StarDropDown = () => {
	return (
		<div className={cs.dropDown}>
			<span><img src={star} alt=""/> <pre>Star</pre></span>
			<BiDownArrow className={cs.icon}/>
		</div>
	);
};

export default StarDropDown;
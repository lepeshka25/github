import React from 'react';
import circle from "../assets/circle.svg";

const Li = ({date, lorem}) => {
	return (
		<li>
			<img src={circle} alt=""/>
			<p>{date}</p>
			<p>{lorem}</p>
		</li>
	);
};

export default Li;
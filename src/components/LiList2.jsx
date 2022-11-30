import React from 'react';
import star from "../assets/star.svg";
import cn from "classnames";

const LiList2 = ({cs , title, lorem, lang , starTotal}) => {
	return (
		<div>
			<p className={cs.title}>{title}</p>
			<p className={cs.lorem}>{lorem}</p>
			<div className={cs.line}>
				<p>
					<span
						className={cn(cs.span, {
							[cs.typscript]: lang === 'TypeScript',
							[cs.javascript]: lang === 'JavaScript'
						})}
					>

					</span>
					<span style={{paddingLeft: '10px'}}> {lang}</span>
				</p>
				<p>
					<img src={star} alt=""/>
					<span  style={{paddingLeft: '10px'}}> {starTotal}</span>
				</p>
			</div>
		</div>
	);
};

export default LiList2;
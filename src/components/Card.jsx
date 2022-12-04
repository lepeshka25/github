import React from 'react';
import star from '../assets/star.svg';
import {BiDownArrow} from "react-icons/bi";
import StarDropDown from "./StarDropDown";

const Card = ({cs, date , login , nameRepository , url , day, state}) => {
	return (
		<div className={cs.card}>
			<img src={url} width="32"
					 height="32" alt="@AlariCode"/>
			<div className={cs.card_body}>
				<div className={cs.info}>
					<p>{login}</p>
					<pre> {state} </pre>
					<p>{nameRepository}</p>
					<span>{day}</span>
				</div>
				<div className={cs.container}>
					<h2>{nameRepository}</h2>
					<StarDropDown/>
					<span className={cs.subTitle}>{date}</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
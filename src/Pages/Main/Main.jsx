import React from 'react';
import {WithLayoutMain} from "../../Layout/Layout";
import {cardList, list2Li, listLi} from "../../utils";
import star from "../../assets/star.svg";
import {BiDownArrow} from "react-icons/bi";
import cs from './Main.module.scss';
import circle from "../../assets/circle.svg";
import cn from "classnames";

const Main = () => {

	return (
		<div className={cs.main}>
			<div className={cs.main_container}>
				{
					Array(10).fill(cardList).map(({login , state, nameRepository, day, date , url}, i) => (
						<div key={i} className={cs.card}>
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

									<div className={cs.dropDown}>
										<span><img src={star} alt=""/> <pre>Star</pre></span>
										<BiDownArrow className={cs.icon}/>
									</div>

									<span className={cs.subTitle}>{date}</span>
								</div>
							</div>
						</div>
					))
				}
			</div>
			<div className={cs.repository_changes}>
				<h4>Latest changes</h4>
				<ul className={cs.list}>
					{listLi.map(({date, id , lorem}) => (
						<li key={id}>
							<img src={circle} alt=""/>
							<p>{date}</p>
							<p>{lorem}</p>
						</li>
					))}
				</ul>
				<h4>Explore repositories</h4>
				<ul className={cs.list2}>
					{
						list2Li.map(({lorem , lang, starTotal , title, id}) => (
							<li key={id}>
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
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default WithLayoutMain(Main);
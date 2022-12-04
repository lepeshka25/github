import React from 'react';
import {WithLayoutMain} from "../../Layout/Layout";
import Li from "../../components/Li";
import LiList2 from "../../components/LiList2";
import Card from "../../components/Card";
import cs from './Main.module.scss';

const listLi = [
	{
		id: 1,
		date: '9 hours ago',
		lorem: 'Audit log improvements for Dependabot alerts'
	},
	{
		id: 2,
		date: '12 hours ago',
		lorem: 'New and improved Enterprise Reports now Generally Available'
	},
	{
		id: 3,
		date: '2 days ago',
		lorem: 'Calendar-based versioning for the REST API'
	},
	{
		id: 4,
		date: '2 days ago',
		lorem: 'CodeQL code scanning launches Kotlin analysis support (beta)'
	},
]

const list2Li = [
	{
		id: 1,
		title: 'kumarabhirup/dockerized',
		lorem: 'Boilerplate to start with Docker setup (Next.js included)',
		lang: 'JavaScript',
		starTotal: '105',
	},
	{
		id: 2,
		title: 'vercel/preview-mode-demo',
		lorem: 'This demo showcases Next.js\' next-gen Static Site Generation (SSG) support.',
		lang: 'TypeScript',
		starTotal: '80',
	},
	{
		id: 3,
		title: 'jagaapple/next-secure-headers',
		lorem: 'Sets secure response headers for Next.js.',
		lang: 'TypeScript',
		starTotal: '280',
	},
]

const cardList = {
	id: 1,
	login: 'AlariCode',
	state: 'created a repository',
	nameRepository: 'PurpleSchool/knowledge-base',
	day: '6 days ago',
	date: 'Updated Nov 25',
	url: 'https://avatars.githubusercontent.com/u/2528600?s=64&v=4',
}

const Main = () => {

	return (
		<div className={cs.main}>
			<div className={cs.main_container}>
				{
					Array(10).fill(cardList).map(({login , state, nameRepository, day, date , url}, i) => (
						<Card
							key={i}
							cs={cs}
							login={login}
							state={state}
							nameRepository={nameRepository}
							day={day}
							date={date}
							url={url}
						/>
					))
				}
			</div>
			<div className={cs.repository_changes}>
				<h4>Latest changes</h4>
				<ul className={cs.list}>
					{listLi.map(({date, id , lorem}) => <Li key={id} date={date} lorem={lorem}/>)}
				</ul>
				<h4>Explore repositories</h4>
				<ul className={cs.list2}>
					{
						list2Li.map(({lorem , lang, starTotal , title, id}) => (
							<li key={id}>
								<LiList2 cs={cs} lorem={lorem} lang={lang} starTotal={starTotal} title={title}/>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default WithLayoutMain(Main);
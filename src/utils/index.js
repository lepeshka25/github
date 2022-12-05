import React from "react";
import overview from "../assets/overview.svg";
import {FiBook} from "react-icons/fi";
import project from "../assets/project.svg";
import {GoPackage} from "react-icons/go";
import {GiStarShuriken} from "react-icons/gi";
import cs from '../Pages/More/Navigate/Navigate.module.scss';

export const listCarusel = [
	{
		id: 1,
		title: 'Overview',
		Icon: <img src={overview} alt={''} className={cs.icon}/>
	},
	{
		id: 2,
		title: 'Repositories',
		Icon: <FiBook className={cs.icon}/>
	},
	{
		id: 3,
		title: 'Projects',
		Icon: <img src={project} alt={''} className={cs.icon}/>
	},
	{
		id: 4,
		title: 'Packages',
		Icon: <GoPackage className={cs.icon}/>
	},
	{
		id: 5,
		title: 'Stars',
		Icon: <GiStarShuriken className={cs.icon}/>
	},
]

export const listLi = [
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

export const list2Li = [
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

export const cardList = {
	id: 1,
	login: 'AlariCode',
	state: 'created a repository',
	nameRepository: 'PurpleSchool/knowledge-base',
	day: '6 days ago',
	date: 'Updated Nov 25',
	url: 'https://avatars.githubusercontent.com/u/2528600?s=64&v=4',
}
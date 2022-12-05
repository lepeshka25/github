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
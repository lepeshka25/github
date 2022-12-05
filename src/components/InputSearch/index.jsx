import React from 'react';
import Input from "../Input/Input";
import cn from "classnames";
import {Link} from "react-router-dom";
import {processChanges} from "../../hook/useDebounce";
import cs from "./style.module.scss";

const InputSearch = () => {
	const [focus , setFocus] = React.useState(false)
	const [user , setUser] = React.useState([])

	function onChange(value){
		processChanges(value , setUser, 'search')
	}

	return (
		<div className={cs.search_contianer}>
			<Input
				className={focus ? cn(cs.input , cs.active) : cs.input}
				onMouseEnter={() => setFocus(true)}
				onMouseLeave={() => setFocus(false)}
				onChange={(e) => onChange(e.target.value)}
				cs={cs}
				type="text"
				placeholder={'Modal GitHub'}
			/>
			<div
				onMouseEnter={() => setFocus(true)}
				onMouseLeave={() => setFocus(false)}
				style={focus ? {display: 'block'} : {display: 'none'}}
				className={cs.resultSearch}
			>
				{
					user?.items?.map(({login, id , avatar_url}) => (
						<div key={id} className={cs.user}>
							<div>
								<img className={cs.photo} src={avatar_url} alt=""/>
								<Link to={`/more/${login}`} className={cs.link}>{login}</Link>
							</div>
							<button>Follow</button>
						</div>
					))
				}
				{
					user.length === 0 && (
						<h1 className={cs.clear}>Пусто</h1>
					)
				}
			</div>
		</div>
	);
};

export default InputSearch;
import React from 'react';
import axios from "axios";

const Repository = ({cs}) => {
	const [data , setData] = React.useState([])
	const value = React.useDeferredValue(data)

	React.useEffect(() => {
		axios.get('https://api.github.com/users/lepeshka25/repos')
			.then(res => setData(res.data))
	}, [])

	return (
		<div className={cs.container_repository}>
			{
				value.map(({full_name}) => (
					<div className={cs.item} key={full_name}>
						<img src="https://avatars.githubusercontent.com/u/104206949?s=16&amp;v=4" width="16" height="16"/>
						<pre> {full_name}</pre>
					</div>
				))
			}
		</div>
	);
};

export default Repository;
import React from 'react';

const Input = ({placeholder, cs, ...props}) => {
	return (
		<input type="text" placeholder={placeholder} className={cs.input} {...props}/>
	);
};

export default Input;
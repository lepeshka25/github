import React from 'react';

const Input = ({placeholder, cs, onChange, className, ...props}) => (
	<input
		onChange={e => onChange(e)}
		type="text"
		placeholder={placeholder}
		className={className ? className : cs.input}
		{...props}
	/>
);

export default Input;
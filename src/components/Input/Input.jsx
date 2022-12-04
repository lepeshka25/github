import React from 'react';

const Input = React.forwardRef(({placeholder, cs, onChange, className, ...props}, ref) => (
	<input
		onChange={e => onChange(e)}
		ref={ref}
		type="text"
		placeholder={placeholder}
		className={className ? className : cs.input}
		{...props}
	/>
));

export default Input;
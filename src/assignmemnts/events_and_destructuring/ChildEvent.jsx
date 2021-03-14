import React from 'react';

const ChildEvent = ({ handler }) => {
	return (
		<div>
			<button onClick={() => handler('From Pune')}>Click me</button>
		</div>
	);
};

export default ChildEvent;

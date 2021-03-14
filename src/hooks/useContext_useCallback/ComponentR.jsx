import React, { useContext } from 'react';
import { UserContext } from './ContextDemo';

const ComponentR = () => {
	const name = useContext(UserContext);
	return (
		<div>
			<h1>Color - {name}</h1>
		</div>
	);
};

export default ComponentR;

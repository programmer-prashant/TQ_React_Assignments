import React from 'react';

function Employee(props) {
	return (
		<div>
			<h1> employee id: {props.match.params.id}</h1>
		</div>
	);
}

export default Employee;

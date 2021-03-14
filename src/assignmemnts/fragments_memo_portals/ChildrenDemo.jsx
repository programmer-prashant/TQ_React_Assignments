// 1. Write a code to get the following output show use of props to pass the
// data and render the children’s as well

import React from 'react';

const ChildrenDemo = ({ name, age, children }) => {
	return (
		<div>
			<h2>
				Hello {name} your age is {age}
			</h2>
			{children}
		</div>
	);
};

export default ChildrenDemo;

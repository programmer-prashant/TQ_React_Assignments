// 2. WAP to take an array of numbers and double their values and display on
// browser example
// Const numbers = [1, 2, 3, 4, 5] and output is 2, 4, 6, 8, 10

import React from 'react';

const ListDemoTwo = () => {
	const numbers = [1, 2, 3, 4, 5];
	return (
		<div>
			{numbers.map((num) => {
				return <h5>{num * 2}</h5>;
			})}
		</div>
	);
};

export default ListDemoTwo;

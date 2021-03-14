//1. WAP to display list of fruits on browser using list rendering example
// Const fruits = ["Apple", "Banana", "Orange", "Mango"]

import React from 'react';

const ListDemo = () => {
	const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
	return (
		<div>
			{fruits.map((fruit) => {
				return <h5>{fruit}</h5>;
			})}
		</div>
	);
};

export default ListDemo;

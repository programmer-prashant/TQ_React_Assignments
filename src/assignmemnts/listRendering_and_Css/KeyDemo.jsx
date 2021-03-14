// 3. WAP to show use of key attribute for following example
// Example const fruits = ["Apple", "Banana", "Orange", "Mango"]

// 4. WAP to show use of key attribute as index for following example
// Const cars = ["Hyundai", "Tata", "BMW”, "Ford”, “Tata”];

import React from 'react';

const KeyDemo = () => {
	const names = ['Prashant', 'Gaurav', 'Pritam', 'Anjali'];
	return (
		<div>
			{names.map((name, index) => {
				return <h5 key={index}>{name}</h5>;
			})}
		</div>
	);
};

export default KeyDemo;

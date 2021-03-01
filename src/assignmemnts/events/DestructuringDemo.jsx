//1. WAP to use Destructure in functional parameter itself for studRoll=101,
// studName=”Raj” mark=85


import React from 'react';

const DestructuringDemo = ({ studRoll, studName, mark }) => {
	return (
		<div>
			<h1>
				{studName} your roll number is {studRoll} and you have got {mark} marks
			</h1>
		</div>
	);
};

export default DestructuringDemo;

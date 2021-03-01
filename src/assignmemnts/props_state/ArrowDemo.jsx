//2. WAP to display “Hello React” using functional component as arrow  function
//3. WAP to display EmpId=101, EmpName=”Raj” using functional  component with properties
// WAP to show use following things in jsx
// 1. {10*5/2+3}
// 2. Display(){ return “Ram”+”patil ”}
// 3. Read value from object student={roll:101,name:”Jay”}

import React from 'react';

const ArrowDemo = (props) => {
	let student = { roll: 101, name: 'Prashant' };
	return (
		<div>
			<h2>Hello React</h2>
			<h3>
				Hello {props.EmpName} your roll number is {props.EmpId}
			</h3>
			<p>{student.name}</p>
			<p>{(10 * 5) / 2 + 3}</p>
			<p>{'prashant ' + 'Raut'}</p>
		</div>
	);
};

export default ArrowDemo;

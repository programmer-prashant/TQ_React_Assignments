//2. WAP to use Destructure in the functional body for empId=emp101,
// empName=”Yash” salary=15000

import React from 'react';

const DestructuringDemoTwo = (props) => {
	const { empId, empName, salary } = props;
	return (
		<div>
			<h2>
				{empName} your Employee Id is {empId} and your salary is {salary} per
				month
			</h2>
		</div>
	);
};

export default DestructuringDemoTwo;

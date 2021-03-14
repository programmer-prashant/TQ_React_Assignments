// 5. WAP to generate following output using List Rendering and key
// Make list of person and its attribute is id, name, skill
// Example:
// Const persons = [{id: 1, name: 'Ansh', age: 22, skill: ’React’},
// {Id: 2, name: 'Jay', age: 25, skill: ’Java’},
// {id: 3, name: 'Sara', age: 23, skill: ’Angular’}]

import React from 'react';

const ListDemoThree = () => {
	const persons = [
		{ id: 1, name: 'Ansh', age: 22, skill: 'React' },
		{ Id: 2, name: 'Jay', age: 25, skill: 'Java' },
		{ id: 3, name: 'Sara', age: 23, skill: 'Angular' },
	];
	return (
		<div>
			{persons.map((person) => {
				return (
					<h3 key={person.Id}>
						I am {person.name} i am {person.age} year old and i know{' '}
						{person.skill}
					</h3>
				);
			})}
		</div>
	);
};

export default ListDemoThree;

// 8. WAP to show use of createElement() and display “Welcome React”
// 9. WAP to show use of nested createElement() and display “Hello TQ”

import React from 'react';

const CreateElementDemo = () => {
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Welcome React'),
		React.createElement('p', null, 'Hello Thinquotient')
	);
};

export default CreateElementDemo;

// 4. WAP to show use of event handle on button and show alert is
// “Welcome to TQPP” in functional component

import React from 'react';

const EventDemoFunc = () => {
	const handleClick = () => {
		alert('Welcome to TQPP');
	};
	return (
		<div>
			<h1>Event Demo</h1>
			<button onClick={handleClick}>Click</button>
		</div>
	);
};

export default EventDemoFunc;

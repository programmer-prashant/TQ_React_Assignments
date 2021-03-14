// 5. WAP to show use of event handle on button and show alert is “Hello
// react ” in class component

import React, { Component } from 'react';

export class EventDemoClass extends Component {
	handleClick = () => {
		alert('Hello React');
	};
	render() {
		return (
			<div>
				<h1>Event Demo in class Component</h1>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		);
	}
}

export default EventDemoClass;

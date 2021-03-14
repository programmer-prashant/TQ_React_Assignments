//2. Write a code to increment a counter on button click by one

import React, { Component } from 'react';

class CounterExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	render() {
		return (
			<div>
				<h1>count - {this.state.count}</h1>
				<button onClick={() => this.increment()}>Increment</button>
			</div>
		);
	}
}

export default CounterExample;

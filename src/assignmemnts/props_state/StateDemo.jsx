//8. WAP to generate following output using state and setstate

import React, { Component } from 'react';

export class StateDemo extends Component {
	state = {
		msg: 'Welcome Visitor',
	};
	render() {
		return (
			<div>
				<h2>{this.state.msg}</h2>
				<button
					onClick={() => {
						this.setState({
							msg: 'Thanks for visiting',
						});
					}}
				>
					Click Me
				</button>
			</div>
		);
	}
}

export default StateDemo;

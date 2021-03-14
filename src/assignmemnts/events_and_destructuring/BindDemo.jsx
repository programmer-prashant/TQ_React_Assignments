// 6. WAP to generate following output using state, setstate and event
// binding -

// 1. Binding in render ()
// 2. Arrow function in render ()
// 3. Binding event handler in class constructor
// 4. Class property as arrow function

import React, { Component } from 'react';

export class BindDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: 'Hello how are you..?',
		};
		// this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler = () => {
		this.setState({
			msg: 'I am fine..!',
		});
	};
	render() {
		return (
			<div>
				<h1>{this.state.msg}</h1>
				{/* <button onClick={this.clickHandler.bind(this)}>click me</button> 
				<button onClick={() => this.clickHandler()}>click me</button>
				<button onClick={this.clickHandler}>click me</button>*/}
				<button onClick={this.clickHandler}>click me</button>
			</div>
		);
	}
}

export default BindDemo;

// 1. Write a code to get the following output
//2. Write a form handling code to get the following output
// 10. Design a form to accept the data from employee
// a. name
// b. salary
// c. Hire date
// d. submit button
// display the data in the alert box

import React, { Component } from 'react';

class FormDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			topic: 'react',
		};
	}

	handleUsernameChange = (e) => {
		this.setState({
			username: e.target.value,
		});
	};
	handleCommentsChange = (e) => {
		this.setState({
			comments: e.target.value,
		});
	};
	handleTopicChange = (e) => {
		this.setState({
			topic: e.target.value,
		});
	};
	handleSubmit = (e) => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
		e.preventDefault();
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor=''>Enter your Name : </label>
					<input
						type='text'
						value={this.state.username}
						onChange={this.handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor=''>Enter your age : </label>
					<input
						type='text'
						value={this.state.comments}
						onChange={this.handleCommentsChange}
					></input>
				</div>
				<div>
					<label htmlFor=''>Toptc : </label>
					<select
						name=''
						id=''
						value={this.state.topic}
						onChange={this.handleTopicChange}
					>
						<option value='react'>React</option>
						<option value='vue'>Vue</option>
						<option value='angular'>Angular</option>
					</select>
				</div>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}

export default FormDemo;

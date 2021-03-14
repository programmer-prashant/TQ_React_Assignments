// 8. design a form to accept name and email id submit the form data using event handler
// stored the data in the local Storage.

//9. design a form to accept name and email id submit the form data using onSubmit
// event handler

import React, { Component } from 'react';

export class FormDemoTwo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			id: '',
		};
	}

	handleUsernameChange = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	handleCommentsChange = (e) => {
		this.setState({
			email: e.target.value,
		});
	};
	handleTopicChange = (e) => {
		this.setState({
			id: e.target.value,
		});
	};
	handleSubmit = (e) => {
		alert(
			`Name = ${this.state.name} | Email = ${this.state.email} | Id = ${this.state.id}`
		);
		e.preventDefault();
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor=''>Enter your Name : </label>
						<input
							type='text'
							value={this.state.name}
							onChange={this.handleUsernameChange}
						/>
					</div>
					<div>
						<label htmlFor=''>Enter your Email : </label>
						<input
							type='text'
							value={this.state.email}
							onChange={this.handleCommentsChange}
						></input>
					</div>
					<div>
						<label htmlFor=''>Enter your Id : </label>
						<input
							type='text'
							value={this.state.id}
							onChange={this.handleTopicChange}
						></input>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		);
	}
}

export default FormDemoTwo;

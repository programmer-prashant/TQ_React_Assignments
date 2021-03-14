// 1. Use axios library to get the data from
// ‘https://reqres.in/api/users?page=2’ and display the list of items in the
// array
// 2. Use axios library to post the new data to
// ‘https://reqres.in/api/users?page=2’
// 3. Fetch the data from ‘https://reqres.in/api/users?page=2 ‘ and display a
// particular data of respective id (accept id from user) display the data on
// button click
// 10.Use axios library to get the data from
// ‘https://jsonplaceholder.typicode.com/photos’ and display the list.

import React, { Component } from 'react';
import axios from 'axios';

class GETRequest extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				console.log(res);
				this.setState({
					posts: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}
	render() {
		const { posts } = this.state;
		return (
			<div>
				{posts.length
					? posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
					: null}
			</div>
		);
	}
}

export default GETRequest;

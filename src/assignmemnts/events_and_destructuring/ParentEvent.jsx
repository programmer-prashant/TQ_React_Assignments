//11. WAP to generate following out using Methods as prop: parent
// message= I am Prashant and child message=Pune

import React, { Component } from 'react';
import ChildEvent from './ChildEvent';

class ParentEvent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			msg: 'Hello I am Prashant',
		};
	}

	clickHandler = (val) => {
		alert(`${this.state.msg} ${val}`);
	};
	render() {
		return (
			<div>
				<ChildEvent handler={this.clickHandler} />
			</div>
		);
	}
}

export default ParentEvent;

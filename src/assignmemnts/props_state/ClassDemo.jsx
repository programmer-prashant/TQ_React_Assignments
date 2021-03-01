//4. WAP to display “Hello TQPP” using classcomponent
//6. WAP to generate following output using propertiesin classcomponent example name=Jay heroname=Batman etc

import React, { Component } from 'react';

class ClassDemo extends Component {
	render() {
		return (
			<div>
				<h2>Hello TQPP</h2>
				<h3>
					{this.props.name} is {this.props.rol}
				</h3>
			</div>
		);
	}
}
export default ClassDemo;

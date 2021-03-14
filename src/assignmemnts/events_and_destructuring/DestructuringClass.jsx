// 3. WAP to use Destructuring props in Class components for
// companyName=” Thinkquotient”, Address=”Pune”

import React, { Component } from 'react';

class DestructuringClass extends Component {
	render() {
		const { companyName, Address } = this.props;
		return (
			<div>
				<h3>
					{companyName} is in {Address}
				</h3>
			</div>
		);
	}
}

export default DestructuringClass;

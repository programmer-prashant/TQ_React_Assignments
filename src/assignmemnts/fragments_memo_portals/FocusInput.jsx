// Show the example of refs with class [2M]
// (hint:text box in a child component button in the parent component)
import React, { Component } from 'react';
import InputRef from './InputRef';

class FocusInput extends Component {
	constructor(props) {
		super(props);

		this.componentRef = React.createRef();
	}
	clickHandler = () => {
		this.componentRef.current.focusInput();
	};
	render() {
		return (
			<div>
				<InputRef ref={this.componentRef} />
				<button onClick={this.clickHandler}>Focus Input</button>
			</div>
		);
	}
}

export default FocusInput;
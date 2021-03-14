// 5. Write a code to get to alert the name and age of the student using uncontrolled
// component
// 6. Show use of respective component phases to build a digital clock and try out the
// event use with camel case and without camel case
import React, { Component } from 'react';

class Uncontrolled extends Component {
	constructor(props) {
		super(props);

		//    this.inputRef= React.createRef();
		this.cbRef = null;
		this.setCallBack = (element) => {
			this.cbRef = element;
		};
	}
	componentDidMount() {
		// console.log(this.inputRef)
		// this.inputRef.current.focus()
		if (this.cbRef) {
			this.cbRef.focus();
		}
	}
	clickHandler = () => {
		alert(this.inputRef.current.value);
	};
	render() {
		return (
			<div>
				<form>
					<input type='text' ref={this.setCallBack} />

					{/* <input type='text' ref={this.inputRef}/>
                    <button onClick={this.clickHandler}> show </button> */}
				</form>
			</div>
		);
	}
}

export default Uncontrolled;

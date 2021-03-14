// 6. WAP to use HOC and also Passing parameter to clickcounter is 5 and
// HoverCounter is 1 and default value is TQPP in HOC and output should
// be following
// 10.Write a HOC code to pass the name to different components


import React, { Component } from 'react';

const withCounter = (WrappedComponent) => {
	class WithCounter extends Component {
		constructor(props) {
			super(props);

			this.state = {
				count: 0,
			};
		}
		incrementCount = () => {
			this.setState((prevState) => {
				return { count: prevState.count + 1 };
			});
		};
		render() {
			return (
				<WrappedComponent
					count={this.state.count}
					incrementCount={this.incrementCount}
					name='Prashant'
					{...this.props}
				/>
			);
		}
	}
	return WithCounter;
};
export default withCounter;

// 7. Consider a react application which is having n no of components pass
// the data from app component and read it in the nested one
// 8. Consider a react application which is having n no of components pass
// the data from app component and read it in the nested one using the
// context type property on a class
// 9. Consider a react application which is having n no of components pass
// two values from app component and read both the values in the nested
// component

import React, { Component } from 'react';
import ComponentB from './ComponentB';

export class ComponentA extends Component {
	render() {
		return (
			<div>
				<ComponentB />
			</div>
		);
	}
}

export default ComponentA;

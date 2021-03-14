// 1. Write a code to show of useReducer hook which adds the number to the
// initial state which is set to 0 and increment counter by 1 on button click


import React, { useContext } from 'react';
import { CountContext } from '../App';
function CLogicDesign() {
	const countContext = useContext(CountContext);
	return (
		<div>
			{countContext.countState}

			<h4> computer logic design component </h4>
			<button onClick={() => countContext.countDispatch('increment')}>
				increment
			</button>
			<button onClick={() => countContext.countDispatch('decrement')}>
				decrement
			</button>
			<button onClick={() => countContext.countDispatch('reset')}>reset</button>
		</div>
	);
}

export default CLogicDesign;

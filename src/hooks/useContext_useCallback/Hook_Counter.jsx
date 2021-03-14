// 1. Create a timer which will be auto incremented after every 1
// second by value 1

import React, { useState } from 'react';

function Hook_Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}> count: {count}</button>
		</div>
	);
}

export default Hook_Counter;

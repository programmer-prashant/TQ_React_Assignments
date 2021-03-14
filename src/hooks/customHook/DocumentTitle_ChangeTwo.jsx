import React, { useState } from 'react';
import useDocumnetTitle from './useDocumentTitle';

function DocumentTitle_ChangeTwo() {
	const [count, setCount] = useState(1);

	useDocumnetTitle(count);
	return (
		<div>
			<button onClick={() => setCount(count * 5)}> count-{count}</button>
		</div>
	);
}

export default DocumentTitle_ChangeTwo;

//9. Write a code to get the practical implementation of react memo concept
// in which pass movie name and movie released date using React.memo()
// 11. Pass a name state property from the app component and try to read the
// same value in the component using memo.
import React from 'react';

const MemoComp = ({ name }) => {
	console.log('Rendering memo component');
	return <div>{name}</div>;
};

export default React.memo(MemoComp);

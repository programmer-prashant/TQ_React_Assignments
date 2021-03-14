//8. Write a portal code to get the following output in which tooltip should
// keep in other dom node

import React from 'react';
import ReactDOM from 'react-dom';

const PortalDemo = () => {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal_root')
	);
};

export default PortalDemo;

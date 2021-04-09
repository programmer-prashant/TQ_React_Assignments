import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs(props) {
	return (
		<div>
			<h1> contact us page </h1>
			<Link to='/' className='btn btn-warning'>
				navigate
			</Link>
		</div>
	);
}

export default ContactUs;

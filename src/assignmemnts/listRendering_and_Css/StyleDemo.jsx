// 7.WAP togenerate following output using CSS Style Sheet
// 8.WAP togenerate following output using inline css without use js object
// 10.WAP to generate following output using inline css with use js object
import React from 'react';
import './StyleDemo.css';

const StyleDemo = () => {
	const style = {
		fontSize: '20px',
		backgroundColor: 'blue',
		border: '3px dotted red',
	};
	return (
		<div>
			<h1 className='h1'>Style Demo</h1>
			<h3 className='h3'>Welcome to react</h3>
			<h2 style={style}>Welcom to TQ</h2>
			<p style={{ fontWeight: 'bold', color: 'red' }}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ea culpa
				accusamus laudantium nemo nulla cupiditate porro et libero sapiente,
				praesentium aliquid asperiores accusantium maxime? Qui aliquam id minima
				maiores!
			</p>
		</div>
	);
};

export default StyleDemo;

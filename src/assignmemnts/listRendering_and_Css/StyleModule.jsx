// 10.WAP to generate following output using inline css with use js object

import React from 'react';
import style from './ApplyStyle.module.css';

const StyleModule = () => {
	return (
		<div>
			<h1 className={style.sucess}>Style Module Demo</h1>
		</div>
	);
};

export default StyleModule;

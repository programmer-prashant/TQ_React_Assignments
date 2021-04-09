import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';
import EmployeeDetails from './EmployeeDetails';
import MyNav from './MyNav';

const Main = () => {
	return (
		<div className='App'>
			<h1> welcome to react js Routing </h1>

			<BrowserRouter>
				<MyNav />
				<Switch>
					<Route exact path='/' exact component={Home} />
					<Route exact path='/about' component={AboutUs} />
					<Route exact path='/contact' component={ContactUs} />
					<Route exact path='/emp' component={EmployeeDetails} />
					<Route component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Main;

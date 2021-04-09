import React from 'react';
import { Link } from 'react-router-dom';

const MyNav = () => {
	return (
		<div>
			<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div class='container-fluid'>
					<a class='navbar-brand' href='#'>
						Routing Demo
					</a>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul class='navbar-nav ml-auto mb-2 mb-lg-0'>
							<Link class='nav-item' to='/'>
								<a class='nav-link active' aria-current='page' href='#'>
									Home
								</a>
							</Link>
							<Link class='nav-item' to='/about'>
								<a class='nav-link' href='#'>
									About
								</a>
							</Link>
							<Link class='nav-item' to='/emp'>
								<a class='nav-link' href='#'>
									Employee
								</a>
							</Link>
							<Link class='nav-item' to='/contact'>
								<a class='nav-link' href='#'>
									Contact
								</a>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default MyNav;

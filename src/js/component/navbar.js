import React from "react";
// import PropTypes from 'prop-types';

import logo from "../../img/logo.png";

export function Navbar() {
	return (
		<div className="container">
			<nav className="navbar border-bottom border-white">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						<img src={logo} />
					</a>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton2"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Favorites
							<span className="badge bg-dark">0</span>
						</button>
						<ul
							className="dropdown-menu dropdown-menu-dark"
							aria-labelledby="dropdownMenuButton2">
							<li>
								<a className="dropdown-item active" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

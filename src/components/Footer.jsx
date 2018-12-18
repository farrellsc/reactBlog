import React, { Component } from 'react';
import "../styles/components/Footer.css"


export default class Footer extends Component {
	render() {
		return (
			<footer className="page-footer font-small blue pt-4">
				<div className="container-fluid text-center text-md-left">
					<div className="footer-copyright text-center py-3">
						<p> this is the footer </p>
					</div>
				</div>
			</footer>
		);
	}
}
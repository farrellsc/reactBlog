import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class Header extends Component {
	render() {
		var curUrl = window.location.href.split("/");
		var curUrl = curUrl[curUrl.length-1];
		console.log(curUrl);
		return (
			<header>
				<div className="shadow-sm">
					<Breadcrumb tag="nav" listTag="div">
						<BreadcrumbItem active={ curUrl === "home" || curUrl === "" } tag="a" href="/"> home </BreadcrumbItem>
						<BreadcrumbItem active={ curUrl === "blog" } tag="a" href="/blog"> blog </BreadcrumbItem>
						<BreadcrumbItem active={ curUrl === "about" } tag="a" href="/about"> about </BreadcrumbItem>
					</Breadcrumb>
				</div>
			</header>
		);
	}
}
import React, { Component } from 'react';
import Sidebar from "react-sidebar";
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class CollapsePanel extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
		        <Collapse isOpen={this.props.collapse}>
		          <Card>
		            <CardBody>
		            Anim pariatur cliche reprehenderit,
		             enim eiusmod high life accusamus terry richardson ad squid. Nihil
		             anim keffiyeh helvetica, craft beer labore wes anderson cred
		             nesciunt sapiente ea proident.
		            </CardBody>
		          </Card>
		        </Collapse>
			</div>
		);
	}
}
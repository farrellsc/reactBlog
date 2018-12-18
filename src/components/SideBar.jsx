import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class MySidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sidebarOpen: props.open
		};
	}
	
	onSetSidebarOpen = (open) => {
    	this.setState({ sidebarOpen: open });
  	}

	render() {
		return (
			<div>
				<Sidebar sidebar="something here" shadow={true} open={ this.state.sidebarOpen } onSetOpen={ this.onSetSidebarOpen } pullRight>
					<Button onClick={() => this.onSetSidebarOpen(true)}> toggle sidebar </Button>
				</Sidebar>
			</div>
		);
	}
}
import React, { Component } from 'react';
import { Container, Row, Col, CardImg, CardBody } from 'reactstrap';
import { Accordion, Icon, Segment } from 'semantic-ui-react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class AccordionItem extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props);
		return (
			<div>
	        	<Accordion.Title active={ this.props.collapse } index={ this.props.index } onClick={ this.props.toggle }>
	          		<Icon name='dropdown' />
	          		{ this.props.title }
	        	</Accordion.Title>
	        	<Accordion.Content active={ this.props.collapse }>
	          		<p> { this.props.content } </p>
	            	<a href="#"> project link </a>
	          	</Accordion.Content>
			</div>
		);
	}
}
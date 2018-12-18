import React, { Component } from 'react';
import { Container, Row, Col, CardImg, CardBody } from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export default class IntroComp extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props);
		return (
			<div>
				<Container>
					<Row>
						<Col> <CardImg src={ this.props.imgSrc } /> </Col>
						<Col> 
							{ this.props.content }
						</Col>
					</Row>
				</Container>
				<hr />
			</div>
		);
	}
}
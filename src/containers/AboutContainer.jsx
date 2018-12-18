import React, { Component } from 'react';
import { Button, Collapse, Card, CardBody, CardImg, Container, Row, Col } from 'reactstrap';
import { Accordion, Icon, Segment } from 'semantic-ui-react'
import MySidebar from "../components/SideBar";
import IntroComp from "../components/IntroComp";
import AccordionItem from "../components/AccordionItem";


export default class AboutContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSidebar: false,
			collapse: [false, false, false, false, false]
		};
	}

	toggleSidebar = () => {
		console.log(this.state.showSidebar);
		this.setState({showSidebar: !this.state.showSidebar});
	}

	toggleCollapse = (index) => {
		console.log(this.state);
		var collapseStates = this.state.collapse;
		collapseStates[index] = !collapseStates[index];
		console.log(index, collapseStates);
		this.setState({collapse: collapseStates});
	}

	renderSideBar = () => {
		return (
			<div className="sidebarContainer">
				<Button color="primary" onClick={ this.toggleSidebar } style={{ marginBottom: '1rem' }}>SideBar</Button>
				<MySidebar />
			</div>
		);
	}

	renderMyIntro = () => {
		return (
			<div className="myIntro">
				<h3> About Me </h3>
				<Segment styled>
					<Container>
						<Row> 
							<Col> <CardImg src="hehe.png"/> </Col>
							<Col> 
								<p> something about me... </p>
							</Col>
						</Row>
					</Container>
				</Segment>
			</div>
		);
	}

	renderEduAndExp = () => {
		const defaultIntroContent = <p> this is a intro component </p>;
		return (
			<div className="eduAndExpContainer">
				<h3> Education & Experience </h3>
				<Segment styled> 
					<div className="education">
						<Container> 
							<Row> 
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
							</Row>
						</Container>
					</div>
					<hr />
					<div className="experience">
						<Container> 
							<Row> 
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
							</Row>
							<Row> 
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
							</Row>
							<Row> 
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
								<Col> <IntroComp content={ defaultIntroContent }/> </Col>
							</Row>
						</Container>
					</div>
				</Segment>
			</div>
		);
	}

	renderResearchCollapseList = () => {
		const defaultTitle = "what is a dog";
		const defaultContent = "this is a dog";
		return (
			<div className="researchListContainer">
				<h3> Projects & Research </h3>
				<Segment styled> 
			        <Accordion styled>
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[0] } index={0} toggle={() => this.toggleCollapse(0) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[1] } index={1} toggle={() => this.toggleCollapse(1) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[2] } index={2} toggle={() => this.toggleCollapse(2) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[3] } index={3} toggle={() => this.toggleCollapse(3) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[4] } index={4} toggle={() => this.toggleCollapse(4) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[0] } index={0} toggle={() => this.toggleCollapse(5) } />
			        	<AccordionItem imgSrc="hehe.png" title={defaultTitle} content={defaultContent} collapse={ this.state.collapse[0] } index={0} toggle={() => this.toggleCollapse(6) } />
			        </Accordion>
		        </Segment>
			</div>
		);
	}

	renderAboutPage = () => {
		return (
			<div className="aboutPageContainer">
				<p> this is the about page </p>
				{ this.renderMyIntro() }
				{ this.renderEduAndExp() }
				{ this.renderResearchCollapseList() }
			</div>
		);
	}

	render() {
		return (
			<div className="aboutContainer">
				{ this.renderAboutPage() }
			</div>
		);
	}
}
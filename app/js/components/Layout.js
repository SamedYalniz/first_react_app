import React from "react";

import Timer from "./Timer";
import Button from "./Button";

export default class Layout extends React.Component {
	constructor (){
		super();
		this.state = {
			firstName: 'Tomas'
		}
	}


	changeName() {
		this.setState({
			firstName: "Jane"
		})
	}
	render (){
		return (
			<div>
				<h1> Welcome to my site!</h1>
				<h2> Happy to have you here :)</h2>
				<h1> {this.state.firstName}</h1>
				<Button firstName = {this.state.firstName} changeName = {this.changeName.bind(this)} />
				<Timer />
				<Timer />
				<Timer />
			</div>
		)
	}
}
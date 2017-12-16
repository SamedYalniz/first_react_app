import React from "react";

import Timer from "./Timer";
import Button from "./Button";

export default class Layout extends React.Component {
	constructor (){
		super();
		this.state = {
			firstName: 'Tomas',
			isTimerMounted: true
		}
	}


	changeName() {
		this.setState({
			firstName: "Jane"
		})
	}

	toggleTimers(){
		this.setState(prevState =>({
			isTimerMounted: !prevState.isTimerMounted
		}))
		this.setState({
			isTimerMounted: false
		})

	}



	render (){
		return (
			<div>
				<h1> Welcome to my site!</h1>
				<h2> Happy to have you here :)</h2>
				<h1> {this.state.firstName}</h1>
				<Button firstName = {this.state.firstName} changeName = {this.changeName.bind(this)} />
				
				{this.state.isTimerMounted ? 
					<div>
						<Timer />
						<Timer />
						<Timer />
					</div>
					: null
				}
				<button onClick= {this.toggleTimers.bind(this)}> Toggle Timers </button>
			</div>
		)
	}
}
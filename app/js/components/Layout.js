import React from "react";
import Timer from "./Timer";
import NameList from "./NameList";

export default class Layout extends React.Component {
	constructor (){
		super();
		this.state = {

		}
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
				<Timer />
				<NameList names={this.props.names}/>
			</div>
		)
	}
}
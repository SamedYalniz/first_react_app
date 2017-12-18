	import React from "react";

	export default class NameList extends React.Component {
		constructor(){
			super();
			this.state= {
				names: [],
				event: "no event detected"
			}
			this.handleClick = this.handleClick.bind(this);
		}

		componentWillMount(){
			console.log(this.props.names)
			this.setState({
				names: this.props.names
			})
		}

		handleClick(event){
			event.preventDefault();
			this.setState({
				event: event.type
			})
		}

		render() {
			let {names} = this.state
			return (
				<div>
						<h2>{this.state.event}</h2>
						<input 
						onChange={this.handleClick}
						onFocus= {this.handleClick}
						onBlur= {this.handleClick}
						onKeyPress={this.handleClick}
						type="text"/>
						
						{names.map((name) => <h3 key={name.id}> <a href="#" onClick={this.handleClick}> {name.first_name} {name.last_name}</a> </h3> )}
				</div>
			)
		}
	}
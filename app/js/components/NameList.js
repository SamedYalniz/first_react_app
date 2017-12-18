	import React from "react";

	export default class NameList extends React.Component {
		constructor(){
			super();
			this.state= {
				names: []
			}
		}

		componentWillMount(){
			console.log(this.props.names)
			this.setState({
				names: this.props.names
			})
		}

		render() {
			let {names} = this.state
			return (
				<div>
					{names.map((name) => <h3 key={name.id}> <a href="#"> {name.first_name} {name.last_name}</a> </h3> )}
				</div>
			)
		}
	}
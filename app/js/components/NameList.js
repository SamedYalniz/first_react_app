import React from 'react';
import Welcome from "./Welcome";

export default class NameList extends React.Component {
		nameMapper(nameArray){
			return nameArray.map((name, i ) =>
				<li key={i}>{name}</li>
			)
		}

		render(){
			const nameArray = ["Chris", "Johan", "Billybob", "Joeyjoe", "Tomas"];
			return (
				<div> 
					<h3> I am number {this.props.number}! </h3>
					<Welcome firstName ="Chris" /> 
					<ul>
		 				{this.nameMapper(nameArray)}
					</ul>
					<Welcome thisfirstName= "Jane" lastName="Doe" />
				</div>
				)
		}	
};



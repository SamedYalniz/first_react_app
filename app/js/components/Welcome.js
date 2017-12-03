import React from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends React.Component {
	render(){
		return (
		<div>
	<h4>Welcome to my site, {this.props.firstName}! </h4>
	<h4> Content: {this.props.lastName}! </h4>
	{this.props.element}
	</div>
	)
	}
}

const lengthChecker = ((props, propName, component) => {
	if (props[propName]) {
		let val = props[propName]
			if (typeof val === "string") {
				return val.length >= 5 ? null : new Error(`${propName} in ${component} is too short`)             //(propName +" in" + component + "is too short")
			}
	}
	return null;


})

Welcome.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: lengthChecker,
	element: PropTypes.oneOfType([
		PropTypes.element, 
		PropTypes.string,
	])

}

Welcome.defaultProps = {
	firstName: "First Name",
	lastName: "Last Name",
}
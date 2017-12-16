import React from 'react';
import ReactDOM from "react-dom";
import NameList from "./components/NameList";

import Layout from "./components/Layout";


class MyApp extends React.Component{

	render() {
		return (
			<div>
				<Layout /> 
			</div>
		)
	};
};


ReactDOM.render(
	<MyApp/>,
	document.getElementById('app')
);



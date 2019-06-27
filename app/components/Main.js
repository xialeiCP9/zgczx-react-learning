import React from "react";
import {connect} from "react-redux";
import BigImg from "./BigImg.js";
import InfoBox from "./InfoBox.js";
import {getData} from "../actions/actions.js";

import "../css/style.less";

class Main extends React.Component{

	constructor({dispatch}){
		super();
		dispatch(getData());
	}
	render(){
		return (
			<div className="container">
				<BigImg />
				<InfoBox />
			</div>
		)
	}
}

export default connect(
	(state) => {
		return {
			state
		}
	}
)(Main);
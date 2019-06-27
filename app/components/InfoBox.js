import React from "react";
import {connect} from "react-redux";
import GoodsInfo from "./GoodsInfo.js";
import ImgType from "./ImgType.js";

import "../css/style.less";

class InfoBox extends React.Component{

	constructor(props){
		super();
	}
	render(){
		return (
			<div className="rightWrap">
				<GoodsInfo goodsName={this.props.state.data.name} />
				<div className="section section-black">
					<div className="section-header">
						<i></i>
						图片筛选
					</div>
					<div className="filter-box">
						{
							this.props.state.data.pic.map((item,index) => {
								return (
									<ImgType key={index} item={item} 
										filter={this.props.state.filter} 
										album={this.props.state.album}
										myAlbum={index} 
										dispatch={this.props.dispatch} />)
							})
						}
					</div>
				</div>
			</div>	
		)
	}
}

export default connect(
	(state) => {
		return {
			state: state.todoReducer
		}
	}
)(InfoBox);
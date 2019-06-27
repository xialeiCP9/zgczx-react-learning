import React from "react";
import {connect} from "react-redux";
import {chooseImg,goPrev,goNext} from "../actions/actions.js";
import $ from "jquery";

import "../css/style.less";

class BigImg extends React.Component{
	constructor({idx,pics}){
		super();
		this.state = {
			showBanner: true
		}
	}
	chooseHandle(index){
		
		this.props.dispatch(chooseImg(index));

	}
	goPrev(){
		this.props.dispatch(goPrev());
	}
	goNext(){
		
		this.props.dispatch(goNext());

	}
	toggleClass(){
		this.setState({
			...this.state,
			showBanner: !this.state.showBanner
		})
	}
	componentWillUpdate(){
		console.log("componentWillUpdate");
		var $showItem = $(".show-item");
		console.log($showItem);
		var $lis = $showItem.find("li");
		console.log($lis);
	}
	
	render(){
		let $showItem = $(".show-item");
		let left = "0px";
		if($showItem.length > 0){
			let showItemWidth = $showItem.width();
			let liWidth = 117;
			let l = this.props.idx * liWidth + liWidth;
			let ulL = $showItem.find("ul").css("left");
			if(l <= showItemWidth){
				left = "0px";
			} else if(this.props.pics.length * liWidth + ulL <= showItemWidth){
				left = -ulL + "px";
			} else {
				left = -(this.props.idx * liWidth - showItemWidth / 2 + liWidth / 2) + "px"
			}
		}
		return (
				<div className="leftWrap">
					<div className="big-img">
						<div className="inner">
							<img src={"./images/big/" + (this.props.pics && this.props.pics[this.props.idx] || "0.jpg")}  alt="" />
						</div>
						<div className="prev" onClick={this.goPrev.bind(this)}></div>
						<div className="next" onClick={this.goNext.bind(this)}></div>
					</div>
					<div className="img-banner" style={{"height" : this.state.showBanner ? "157px" : "50px"}}>
						<div className="trigger-bar" onClick={this.toggleClass.bind(this)}>
							<div className="page-tips">
								<span>{this.props.idx + 1}</span> / {this.props.pics && this.props.pics.length}
							</div>
							<span className="text">{this.state.showBanner ? "隐藏" : "显示"}</span>
							<i className={this.state.showBanner ? "triangle" : "triangle triangle-down"}></i>
						</div>
						<div className={["show-slide-on",this.state.showBanner ? "" : "show-slide-off"].join("")}>
							<div className="prev-btn" onClick={this.goPrev.bind(this)}></div>
							<div className="show-item">
								<ul style={{"left":left}}>
									{
										this.props.pics && this.props.pics.map((item,index) => {
											return (
														<li key={index} onClick={this.chooseHandle.bind(this,index)} index={index} className={index == this.props.idx ? "current" : ""}>
															<img src={"./images/small/" + item} alt="" />
												  		</li>
												  	);
										})
									}
								</ul>
							</div>
							<div className="next-btn" onClick={this.goNext.bind(this)}></div>
						</div>
					</div>
				</div>
		)
	}
}

export default connect(
	(state) => {
		if(state.todoReducer.data.pic.length == 0){
			return {
				pics: null,
				idx: 0
			}
		} else {
			return {
				pics: state.todoReducer.data.pic[state.todoReducer.album].filter[state.todoReducer.filter].pics,
				idx: state.todoReducer.idx
			}
		}
	}
)(BigImg);